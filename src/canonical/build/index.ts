import { loggerBuild } from '../../config/logger/logger.js';
import { mountClienteCanonical } from './cliente/index.js';
import { mountClienteProdutoCanonical } from './clienteProduto/index.js';
import { mountProdutoCanonical } from './produto/index.js';

/**
 * Função que recebe o canonical, o payload de carregamento e os dados processados e retorna o canonical modificado.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de carregamento.
 * @param {Map<string, any>} requestCalls - As requisições de carregamento e suas responses.
 * @returns {Promise<any>} - O canonical modificado.
 */
export async function buildCanonical(
	canonical: { nome: string },
	payload: any,
	requestCalls: Map<string, any>,
): Promise<any> {
	loggerBuild.debug('Executing buildCanonical');
	loggerBuild.debug('----------------------');
	loggerBuild.debug(`canonical: ${JSON.stringify(canonical)}`);
	loggerBuild.debug(`payload: ${JSON.stringify(payload)}`);
	loggerBuild.debug(`requestCalls: ${JSON.stringify(Object.fromEntries(requestCalls))}`);

	const canonicalBuilders: Record<string, (requests: Map<string, any>) => any> = {
		cliente: mountClienteCanonical,
		produto: mountProdutoCanonical,
		clienteProduto: mountClienteProdutoCanonical,
	};

	let data;
	const buildFunction = canonicalBuilders[canonical.nome];

	try {
		data = buildFunction ? buildFunction(requestCalls) : null;
	} catch (error: any) {
		loggerBuild.error(`Error building canonical: ${error.message}`);
		throw error;
	}

	loggerBuild.debug(`Canonical built: ${JSON.stringify(data)}`);
	loggerBuild.debug('----------------------');
	return data;
}

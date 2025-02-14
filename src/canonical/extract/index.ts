import { loggerExtract } from '../../config/logger/logger.js';
import { extractClienteProduto } from './clienteProduto/index.js';

/**
 * Função que recebe os resultados das requisições do carregamento do canônico e extrai os dados de parâmetros necessários para.
 *
 * @param {any} mergeCanonical - O objeto canonical que representa o merge.
 * @param {any} targetCanonical - O objeto canonical que terá a os parâmetros de carregamento extraídos.
 * @param {[any]} requestCalls - Lista contendo os resultados das requisições do carregamento do canônico de merge.
 * @returns {Promise<any>} - Um objeto contendo os parâmetros de carregamento do canônico.
 */
export async function extractCanonicalParameters(
	mergeCanonical: any,
	targetCanonical: any,
	requestCalls: Map<string, any>,
	dadosParametros: any,
): Promise<any[]> {
	loggerExtract.debug('Executing extractCanonicalParameters');
	loggerExtract.debug('----------------------');
	loggerExtract.debug(`mergeCanonical: ${JSON.stringify(mergeCanonical)}`);
	loggerExtract.debug(`targetCanonical: ${JSON.stringify(targetCanonical)}`);
	loggerExtract.debug(`requestCalls: ${JSON.stringify(Object.fromEntries(requestCalls))}`);
	loggerExtract.debug(`dadosParametros: ${JSON.stringify(dadosParametros)}`);

	let parametersData: any[] = [];

	try {
		switch (mergeCanonical.nome) {
			case 'clienteProduto':
				parametersData = extractClienteProduto(targetCanonical, requestCalls, dadosParametros);
				break;
		}
	} catch (error: any) {
		loggerExtract.error(`Error extracting parameters: ${error.message}`);
		throw error;
	}

	loggerExtract.debug(`Extracted parameters: ${JSON.stringify(parametersData)}`);
	loggerExtract.debug('----------------------');
	return parametersData;
}

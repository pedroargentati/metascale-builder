import { loggerReprocess } from '../../config/logger/logger.js';
import type { LoadCallback } from '../../types/index.js';
import { deleteAllItems } from './operations/deleteAll.js';

/**
 * Função que recebe o canonical e um payload para tratar reprocessamentos.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de reprocessamento.
 */
export async function reprocessCanonical(canonical: any, payload: any, loadCallback: LoadCallback) {
	loggerReprocess.debug('Executing reprocessCanonical');
	loggerReprocess.debug('----------------------');
	loggerReprocess.debug(`canonical: ${JSON.stringify(canonical)}`);
	loggerReprocess.debug(`payload: ${JSON.stringify(payload)}`);
	loggerReprocess.debug('----------------------');

	const operation = payload.operation;

	try {
		switch (operation) {
			case 'deleteAll':
				await deleteAllItems(canonical);
				break;
		}
	} catch (error: any) {
		loggerReprocess.error(`Error reprocessing canonical: ${error.message}`);
		throw error;
	}

	loggerReprocess.debug('----------------------');
}

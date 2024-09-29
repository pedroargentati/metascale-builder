import { logCanonicalError, logCanonicalInfo } from '../../../config/logger/logger.js';
import type { LoadCallback } from '../../../types/index.js';
import { SYNC_OPER_CREATE, SYNC_OPER_DELETE, SYNC_OPER_READ, SYNC_OPER_UPDATE } from '../util/constants.js';

export async function synchronizeClienteProduto(topico: any, kafkaMessage: any, loadCallback: LoadCallback) {
	if (topico === 'db1.VivoTest.userproduct') {
		const payload = kafkaMessage.payload;
		const operation = kafkaMessage.op;

		const userId = payload.after.user_id;

		logCanonicalInfo('clienteProduto', userId, `Iniciando sincronização`);

		try {
			await loadCallback({
				getClienteProduto: {
					id: userId,
				},
			});
		} catch (error: any) {
			logCanonicalError('clienteProduto', userId, `Erro na sincronização: ${error.message}`);
			throw error;
		}

		logCanonicalInfo('clienteProduto', userId, `Finalizando sincronização`);

		if (operation === SYNC_OPER_CREATE) {
		} else if (operation === SYNC_OPER_UPDATE) {
		} else if (operation === SYNC_OPER_DELETE) {
		} else if (operation === SYNC_OPER_READ) {
		}
	}
}

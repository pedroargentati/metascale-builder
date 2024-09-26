import { loggerSyncronize } from "../../config/logger/logger.js";
import type { LoadCallback } from "../../types/index.js";
import { synchronizeCliente } from "./cliente/index.js";
import { synchronizeClienteProduto } from "./clienteProduto/index.js";
import { synchronizeProduto } from "./produto/index.js";

/**
 * Função que recebe o canonical e a mensagem do Kafka para tratar sincronização.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} kafkaMessage - A mensagem Kafka originário do processo de CDC.
 */
export async function synchronizeCanonical(
	canonical: any,
	topico: any,
	kafkaMessage: any,
	loadCallback: LoadCallback
) {
	loggerSyncronize.debug("Executing synchronizeCanonical");
	loggerSyncronize.debug("----------------------");
	loggerSyncronize.debug("canonical", canonical);
	loggerSyncronize.debug("topico", topico);
	loggerSyncronize.debug("kafkaMessage", kafkaMessage);
	loggerSyncronize.debug("----------------------");

	switch (canonical.nome) {
		case "cliente":
			await synchronizeCliente(topico, kafkaMessage, loadCallback);
			break;
		case "produto":
			await synchronizeProduto(topico, kafkaMessage, loadCallback);
			break;
		case "clienteProduto":
			await synchronizeClienteProduto(topico, kafkaMessage, loadCallback);
			break;
	}
}

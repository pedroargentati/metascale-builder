import { loggerReprocess } from "../../config/logger/logger.js";
import type { LoadCallback } from "../../types/index.js";
import { deleteAllItems } from "./operations/deleteAll.js";

/**
 * Função que recebe o canonical e um payload para tratar reprocessamentos.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de reprocessamento.
 */
export async function reprocessCanonical(
	canonical: any,
	payload: any,
	loadCallback: LoadCallback
) {
	loggerReprocess.debug("Executing reprocessCanonical");
	loggerReprocess.debug("----------------------");
	loggerReprocess.debug("canonical", canonical);
	loggerReprocess.debug("payload", payload);
	loggerReprocess.debug("----------------------");

	const operation = payload.operation;

	switch (operation) {
		case "deleteAll":
			await deleteAllItems(canonical);
			break;
	}
}

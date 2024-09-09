import type { LoadCallback } from "../../types/index.js";
import { deleteAllItems } from "./operations/deleteAll.js";

/**
 * Função que recebe o canonical e um payload para tratar reprocessamentos.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de reprocessamento.
 */
export async function reprocessCanonical(canonical: any, payload: any, loadCallback: LoadCallback) {
  console.log("Executing reprocessCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("payload", payload);
  console.log("----------------------");

  const operation = payload.operation;

  switch (operation) {
    case "deleteAll": await deleteAllItems(canonical); break;
  }
}

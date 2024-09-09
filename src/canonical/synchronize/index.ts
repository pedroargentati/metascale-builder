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
export async function synchronizeCanonical(canonical: any, topico: any, kafkaMessage: any, loadCallback: LoadCallback) {
  console.log("Executing synchronizeCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("topico", topico);
  console.log("kafkaMessage", kafkaMessage);
  console.log("----------------------");

  switch (canonical.nome) {
    case "cliente": synchronizeCliente(topico, kafkaMessage, loadCallback); break;
    case "produto": synchronizeProduto(topico, kafkaMessage, loadCallback); break;
    case "clienteProduto": synchronizeClienteProduto(topico, kafkaMessage, loadCallback); break;
  }
}
/**
 * Função que recebe o canonical e a mensagem do Kafka para tratar sincronização.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} kafkaMessage - A mensagem Kafka originário do processo de CDC.
 */
export async function synchronizeCanonical(canonical: any, kafkaMessage: any) {
  console.log("Executing synchronizeCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("kafkaMessage", kafkaMessage);
  console.log("----------------------");
}
/**
 * Função que recebe o canonical, o payload de carregamento e os dados processados e retorna o canonical modificado.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de carregamento.
 * @param {any} processedData - Os dados processados.
 * @returns {any} - O canonical modificado.
 */
async function buildCanonical(canonical, payload, processedData) {
  console.log("Executing buildCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("payloadDeCarregamento", payload);
  console.log("processedData", processedData);

  let data;

  switch (
    canonical.name
    // faça algo com o canonical e defina 'data' adequadamente
  ) {
  }

  console.log("Canonical built", data);
  console.log("----------------------");
  return data;
}

/**
 * Função que recebe o canonical e a mensagem do Kafka para tratar sincronização.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} kafkaMessage - A mensagem Kafka originário do processo de CDC.
 */
async function synchronizeCanonical(canonical, kafkaMessage) {
  console.log("Executing synchronizeCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("kafkaMessage", kafkaMessage);
  console.log("----------------------");
}

/**
 * Função que recebe o canonical e um payload para tratar reprocessamentos.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de reprocessamento.
 */
async function reproccessCanonical(canonical, payload) {
  console.log("Executing reproccessCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("payload", payload);
  console.log("----------------------");
}

module.exports = { buildCanonical, synchronizeCanonical, reproccessCanonical };

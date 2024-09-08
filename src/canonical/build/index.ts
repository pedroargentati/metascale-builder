/**
 * Função que recebe o canonical, o payload de carregamento e os dados processados e retorna o canonical modificado.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de carregamento.
 * @param {any} processedData - Os dados processados.
 * @returns {any} - O canonical modificado.
 */
export async function buildCanonical(canonical: any, payload: any, processedData: any): Promise<any> {
  console.log("Executing buildCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("payloadDeCarregamento", payload);
  console.log("processedData", processedData);

  let data: any;

  switch (
    canonical.name
    // faça algo com o canonical e defina 'data' adequadamente
  ) {
  }

  console.log("Canonical built", data);
  console.log("----------------------");
  return data;
}
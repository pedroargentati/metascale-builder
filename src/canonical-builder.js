/**
 * Função que recebe o canonical, o payload de carregamento e os dados processados e retorna o canonical modificado.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payloadDeCarregamento - O payload de carregamento.
 * @param {any} processedData - Os dados processados.
 * @returns {any} - O canonical modificado.
 */
function buildCanonical(canonical, payloadDeCarregamento, processedData) {
  if (!canonical) return;
  console.log('canonical', canonical);
  console.log('payloadDeCarregamento', payloadDeCarregamento);
  console.log('processedData', processedData);

  let data;

  switch (canonical.name) {
    // faça algo com o canonical e defina 'data' adequadamente
  }

  return data;
}
module.exports = buildCanonical;
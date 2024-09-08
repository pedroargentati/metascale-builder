/**
 * Função que recebe os resultados das requisições do carregamento do canônico e extrai os dados de parâmetros necessários para.
 *
 * @param {any} mergeCanonical - O objeto canonical que representa o merge.
 * @param {any} targetCanonical - O objeto canonical que terá a os parâmetros de carregamento extraídos.
 * @param {[any]} calls - Lista contendo os resultados das requisições do carregamento do canônico de merge.
 * @returns {Promise<any>} - Um objeto contendo os parâmetros de carregamento do canônico.
 */
export async function extractCanonicalParameters(mergeCanonical: any, targetCanonical: any, calls: [any]): Promise<any> {
  console.log("Executing extractCanonicalParameters");
  console.log("----------------------");
  console.log("mergeCanonical", mergeCanonical);
  console.log("targetCanonical", targetCanonical);
  console.log("calls", calls);

  let parametersData: any;

  console.log("Extracted parameters", parametersData);
  console.log("----------------------");
  return parametersData;
}
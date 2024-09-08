/**
 * Função que recebe os resultados das requisições do carregamento do canônico e extrai os dados de parâmetros necessários para.
 *
 * @param {any} mergeCanonical - O objeto canonical que representa o merge.
 * @param {any} mergeData - Dados carregados do canônico de merge.
 * @param {any} dependencyData - Dados carregados das dependências associadas ao canônico de merge.
 * @returns {Promise<any>} - Um objeto mergeado contendo os dados prontos para exibição do canonical de merge.
 */
export async function mergeCanonical(mergeCanonical: any, mergeData: any, dependencyData: any): Promise<any> {
  console.log("Executing mergeCanonical");
  console.log("----------------------");
  console.log("mergeCanonical", mergeCanonical);
  console.log("mergeData", mergeData);
  console.log("dependencyData", dependencyData);

  let mergedData: any;

  console.log("Merged data", mergedData);
  console.log("----------------------");
  return mergedData;
}
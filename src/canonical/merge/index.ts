import { loggerMerge } from "../../config/logger/logger.js";
import { mergeClienteProduto } from "./clienteProduto/index.js";

/**
 * Função que recebe os resultados das requisições do carregamento do canônico e extrai os dados de parâmetros necessários para.
 *
 * @param {any} mergeCanonical - O objeto canonical que representa o merge.
 * @param {any} mergeData - Dados carregados do canônico de merge.
 * @param {any} dependencyData - Dados carregados das dependências associadas ao canônico de merge.
 * @returns {Promise<any>} - Um objeto mergeado contendo os dados prontos para exibição do canonical de merge.
 */
export async function mergeCanonical(mergeCanonical: any, mergeData: any, dependencyData: any): Promise<any> {
  loggerMerge.debug("Executing mergeCanonical");
  loggerMerge.debug("----------------------");
  loggerMerge.debug("mergeCanonical", mergeCanonical);
  loggerMerge.debug("mergeData", mergeData);
  loggerMerge.debug("dependencyData", dependencyData);

  let mergedData: any;

  try {
    switch (
      mergeCanonical.nome
    ) {
      case "clienteProduto": mergedData = mergeClienteProduto(mergeData, dependencyData); break;
    }
  } catch (error: any) {
    loggerMerge.error(`Error merging data: ${error.message}`);
    throw error;
  }

  loggerMerge.debug("Merged data", mergedData);
  loggerMerge.debug("----------------------");
  return mergedData;
}

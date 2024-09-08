import { mountClienteCanonical } from "./cliente/index.js";
import { mountClienteProdutoCanonical } from "./clienteProduto/index.js";
import { mountProdutoCanonical } from "./produto/index.js";

/**
 * Função que recebe o canonical, o payload de carregamento e os dados processados e retorna o canonical modificado.
 *
 * @param {any} canonical - O objeto canonical.
 * @param {any} payload - O payload de carregamento.
 * @param {[any]} requestCalls - As requisições de carregamento e suas responses.
 * @returns {any} - O canonical modificado.
 */
export async function buildCanonical(canonical: any, payload: any, requestCalls: Map<string, any>): Promise<any> {
  console.log("Executing buildCanonical");
  console.log("----------------------");
  console.log("canonical", canonical);
  console.log("payload", payload);
  console.log("requestCalls", requestCalls);

  let data: any;

  switch (
    canonical.nome
  ) {
    case "cliente": data = mountClienteCanonical(requestCalls); break;
    case "produto": data = mountProdutoCanonical(requestCalls); break;
    case "clienteProduto": data = mountClienteProdutoCanonical(requestCalls); break;
  }

  console.log("Canonical built", data);
  console.log("----------------------");
  return data;
}

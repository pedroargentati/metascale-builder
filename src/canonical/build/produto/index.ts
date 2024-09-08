export function mountProdutoCanonical(requestCalls: Map<string, any>) {
  const response = requestCalls.get("getProduct");

  return {
    id: response.product_id,
    nome: response.product_name,
    descricao: response.description,
    dataLancamento: response.release_date,
    tipo: response.product_type
  };
}
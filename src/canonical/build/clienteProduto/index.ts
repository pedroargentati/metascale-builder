export function mountClienteProdutoCanonical(requestCalls: Map<string, any>) {
  const response = requestCalls.get("getClienteProduto");

  const produtos = [];
  produtos.push({
    idProduto: response.product_id,
    dataAquisicao: response.association_date,
    feedback: response.feedback,
    status: response.status,
    preco: response.price
  });

  return {
    id: response.customer_id,
    produtos
  };
}
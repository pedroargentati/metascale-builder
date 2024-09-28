export function mountProdutoCanonical(requestCalls: Map<string, any>) {
	const response = requestCalls.get("getProduct");

	return {
		id: response.id,
		nome: response.product_name,
		tipo: response.product_type,
		descricoes: response.descriptions,
	};
}

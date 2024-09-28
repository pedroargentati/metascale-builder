export function mountClienteProdutoCanonical(requestCalls: Map<string, any>) {
	const response = requestCalls.get("getClienteProduto");

	return {
		produtos: [createProductObject(response)],
	};
}

function createProductObject(product: Record<string, any>) {
	return {
		idProduto: product?.id ?? null,
		nomeProduto: product?.product_name ?? null,
		tipoProduto: product?.product_type ?? null,
		dataInicio: product?.start_date ?? null,
		status: product?.status ?? null,
		subProdutos: product?.sub_products?.map((subProduct: Record<string, any>) => createProductObject(subProduct)) ?? [],
		descricoes: product?.descriptions ?? [],
		preco: product?.price?.amount?.value ?? null,
	};
}

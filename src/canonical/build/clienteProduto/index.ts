export function mountClienteProdutoCanonical(requestCalls: Map<string, any>) {
	const produtos = requestCalls.get("getClienteProduto");

	return {
		produtos: [createProductObject(produtos[0])],
	};
}

function createProductObject(product: Record<string, any>) {
	return {
		idProduto: product?.id ?? null,
		dataInicio: product?.start_date ?? null,
		status: product?.status ?? null,
		subProdutos:
			product?.sub_products?.map((subProduct: Record<string, any>) =>
				createProductObject(subProduct)
			) ?? [],
		preco: product?.price?.amount?.value ?? null,
		tipoCobranca: product?.price?.type ?? null,
		periodicidadeCobranca: product?.price?.recurring_period ?? null,
		descricaoCobranca: product?.price?.description ?? null,
	};
}

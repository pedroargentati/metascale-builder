export function extractClienteProduto(
	targetCanonical: any,
	requestCalls: Map<string, any>,
	dadosParametro: any,
): any[] {
	if (targetCanonical.nome === 'cliente') {
		return [
			{
				getCustomer: {
					id: dadosParametro['getClienteProduto']['id'],
				},
			},
		];
	} else {
		const produtos = requestCalls.get('getClienteProduto');

		const idsProdutos = extraiTodosOsIdsDeProdutosDependentes(produtos);

		return idsProdutos.map((id: string) => {
			return {
				getProduct: {
					id,
				},
			};
		});
	}
}

const extraiTodosOsIdsDeProdutosDependentes = (produtos: any[]): any[] => {
	const idsProdutos: string[] = [];

	produtos.forEach((produto) => {
		if (produto.sub_products) {
			idsProdutos.push(...extraiTodosOsIdsDeProdutosDependentes(produto.sub_products));
		}

		idsProdutos.push(produto.id);
	});

	return idsProdutos;
};

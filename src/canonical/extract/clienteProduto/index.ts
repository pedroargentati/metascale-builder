export function extractClienteProduto(
	targetCanonical: any,
	requestCalls: Map<string, any>,
	dadosParametro: any
): any[] {
	const produtos = requestCalls.get("getClienteProduto");

	if (targetCanonical.nome === "cliente") {
		return [
			{
				getCustomer: {
					id: dadosParametro["getClienteProduto"]["id"],
				},
			},
		];
	} else {
		return produtos.map((produto: any) => {
			return {
				getProduct: {
					id: produto.id,
				},
			};
		});
	}
}

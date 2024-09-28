export function mergeClienteProduto(mergeData: any, dependencyData: any): any {
	const clienteProduto = mergeData;

	const cliente = dependencyData.cliente[0];
	const produtos = dependencyData.produto;

	if (clienteProduto.produtos.length > 0) {
		clienteProduto.produtos = clienteProduto.produtos.map(
			(produto: any) => {
				const produtoData = produtos.find(
					(p: any) => p.id === produto.idProduto
				);
				delete produtoData.id;

				return {
					...produto,
					...produtoData,
				};
			}
		);
	}

	return {
		...clienteProduto,
		...cliente,
	};
}

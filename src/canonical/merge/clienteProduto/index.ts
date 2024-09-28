export function mergeClienteProduto(mergeData: any, dependencyData: any): any {
	const clienteProduto = mergeData;

	const cliente = dependencyData.cliente[0];
	const produtos = dependencyData.produto;

	clienteProduto.produtos = mergeProducts(clienteProduto.produtos, produtos);

	return {
		...clienteProduto,
		...cliente,
	};
}

const mergeProducts = (produtos: any[], dependencyProducts: any[]) => {
	return produtos.map((produto) => {
		produto.subProdutos = mergeProducts(produto.subProdutos, dependencyProducts);

		const dependencyProduct = dependencyProducts.find((p) => p.id === produto.idProduto);
		delete dependencyProduct.id;

		return {
			...produto,
			...dependencyProduct,
		};
	});
};

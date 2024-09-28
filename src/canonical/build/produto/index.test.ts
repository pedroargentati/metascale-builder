import { mountProdutoCanonical } from './index.js';

describe('Build Produto', () => {
	test('deve retornar o produto construído', () => {
		const requestCalls = new Map();
		requestCalls.set('getProduct', {
			id: 'P001',
			product_name: 'Produto A',
			product_type: 'mobile',
			descriptions: [
				{
					text: 'Descrição do Produto A - versão básica',
					url: 'http://example.com/produtoA/basico',
					category: 'general',
				},
			],
		});

		const expectedBuild = {
			id: 'P001',
			nome: 'Produto A',
			tipo: 'mobile',
			descricoes: [
				{
					texto: 'Descrição do Produto A - versão básica',
					url: 'http://example.com/produtoA/basico',
					categoria: 'general',
				},
			],
		};

		expect(mountProdutoCanonical(requestCalls)).toEqual(expectedBuild);
	});
});

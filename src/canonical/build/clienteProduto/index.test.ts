import { mountClienteProdutoCanonical } from './index.js';

describe('Build ClienteProduto', () => {
	test('deve retornar o clienteProduto construído', () => {
		const requestCalls = new Map();
		requestCalls.set('getClienteProduto', [
			{
				id: 'P001',
				product_name: 'Produto A',
				product_type: 'mobile',
				status: 'active',
				start_date: '2024-01-01 00:00:00.0',
				identifiers: ['+51939791073', '+51939791075'],
				descriptions: [
					{
						text: 'Descrição do Produto A - versão básica',
						url: 'http://example.com/produtoA/basico',
						category: 'general',
					},
				],
				sub_products: [
					{
						id: 'P002',
						product_name: 'Produto B',
						product_type: 'internet',
						descriptions: [
							{
								text: 'Descrição do Produto B - Internet rápida',
								url: 'http://example.com/produtoB',
								category: 'dates',
							},
						],
					},
				],
				price: {
					description: 'Assinatura do Produto A',
					type: 'RECURRING',
					recurring_period: 'ANNUAL',
					amount: {
						value: 299.99,
					},
				},
			},
		]);

		const expectedBuild = {
			produtos: [
				{
					idProduto: 'P001',
					dataInicio: '2024-01-01 00:00:00.0',
					status: 'active',
					subProdutos: [
						{
							idProduto: 'P002',
							dataInicio: null,
							status: null,
							subProdutos: [],
							preco: null,
							tipoCobranca: null,
							periodicidadeCobranca: null,
							descricaoCobranca: null,
						},
					],
					preco: 299.99,
					tipoCobranca: 'RECURRING',
					periodicidadeCobranca: 'ANNUAL',
					descricaoCobranca: 'Assinatura do Produto A',
				},
			],
		};

		expect(mountClienteProdutoCanonical(requestCalls)).toEqual(expectedBuild);
	});
});

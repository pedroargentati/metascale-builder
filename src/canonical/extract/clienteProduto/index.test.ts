import { extractClienteProduto } from './index.js';

describe('Extract Produto from ClienteProduto', () => {
	test('deve extrair os parâmetros para carregamento do canônico produto', () => {
		const targetCanonical = {
			nome: 'produto',
		};
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

		expect(extractClienteProduto(targetCanonical, requestCalls, null)).toEqual([
			{
				getProduct: {
					id: 'P002',
				},
			},
			{
				getProduct: {
					id: 'P001',
				},
			},
		]);
	});
});

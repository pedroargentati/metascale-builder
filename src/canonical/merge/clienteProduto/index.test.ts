import { mergeClienteProduto } from './index.js';

describe('Merge ClienteProduto', () => {
	test('deve executar o merge do clienteProduto', () => {
		const mergeData = {
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
		const dependencyData = {
			cliente: [
				{
					id: '1',
					nome: 'Alex Silva',
					email: 'alex.silva@example.com',
					telefone: '+51939791073',
					cidade: 'SÃ£o Paulo',
					estado: 'SP',
				},
			],
			produto: [
				{
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
				},
				{
					id: 'P002',
					nome: 'Produto B',
					tipo: 'internet',
					descricoes: [
						{
							texto: 'Descrição do Produto B - Internet rápida',
							url: 'http://example.com/produtoB',
							categoria: 'dates',
						},
					],
				},
			],
		};

		expect(mergeClienteProduto(mergeData, dependencyData)).toEqual({
			produtos: [
				{
					preco: 299.99,
					tipoCobranca: 'RECURRING',
					idProduto: 'P001',
					descricaoCobranca: 'Assinatura do Produto A',
					periodicidadeCobranca: 'ANNUAL',
					dataInicio: '2024-01-01 00:00:00.0',
					status: 'active',
					subProdutos: [
						{
							preco: null,
							tipoCobranca: null,
							idProduto: 'P002',
							nome: 'Produto B',
							tipo: 'internet',
							descricoes: [
								{
									texto: 'Descrição do Produto B - Internet rápida',
									url: 'http://example.com/produtoB',
									categoria: 'dates',
								},
							],
							descricaoCobranca: null,
							periodicidadeCobranca: null,
							dataInicio: null,
							status: null,
							subProdutos: [],
						},
					],
					nome: 'Produto A',
					tipo: 'mobile',
					descricoes: [
						{
							texto: 'Descrição do Produto A - versão básica',
							url: 'http://example.com/produtoA/basico',
							categoria: 'general',
						},
					],
				},
			],
			nome: 'Alex Silva',
			telefone: '+51939791073',
			cidade: 'SÃ£o Paulo',
			estado: 'SP',
			id: '1',
			email: 'alex.silva@example.com',
		});
	});
});

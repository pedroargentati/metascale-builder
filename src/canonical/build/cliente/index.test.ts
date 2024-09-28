import { mountClienteCanonical } from './index.js';

describe('Build Cliente', () => {
	test('deve retornar o cliente construído', () => {
		const requestCalls = new Map();
		requestCalls.set('getCustomer', {
			user_id: '1',
			name: 'Fulano',
			email: 'fulano@email.com',
			phone: '123456789',
			city: 'São Paulo',
			state: 'SP',
		});

		const expectedBuild = {
			id: '1',
			nome: 'Fulano',
			email: 'fulano@email.com',
			telefone: '123456789',
			cidade: 'São Paulo',
			estado: 'SP',
		};

		expect(mountClienteCanonical(requestCalls)).toEqual(expectedBuild);
	});
});

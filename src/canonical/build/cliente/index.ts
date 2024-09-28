export function mountClienteCanonical(requestCalls: Map<string, any>) {
	const response = requestCalls.get('getCustomer');

	return {
		id: response.user_id,
		nome: response.name,
		email: response.email,
		telefone: response.phone,
		cidade: response.city,
		estado: response.state,
	};
}

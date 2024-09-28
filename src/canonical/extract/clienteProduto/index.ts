export function extractClienteProduto(
	targetCanonical: { nome: 'cliente' | 'produto' },
	requestCalls: Map<string, any>
): any[] {
	const response = requestCalls.get("getClienteProduto");

	const keyMap: Record<'cliente' | 'produto', { key: string; value: string }> = {
		cliente: { key: "getCustomer", value: "user_id" },
		produto: { key: "getProduct", value: "id" }
	};

	// Recupera as informações baseadas no nome do targetCanonical
	const { key: idKey, value: idField } = keyMap[targetCanonical.nome as keyof typeof keyMap];
	const idValue = response?.[idField] ?? null;

	return [
		{
			[idKey]: {
				id: idValue,
			},
		},
	];
}

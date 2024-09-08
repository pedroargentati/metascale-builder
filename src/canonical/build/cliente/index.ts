export function mountClienteCanonical(requestCalls: Map<string, any>) {
  const response = requestCalls.get("getCustomer");

  return {
    id: response.customer_id,
    nome: response.customer_name,
    email: response.customer_email,
    telefone: response.customer_phone,
    cidade: response.city,
    estado: response.state
  };
}
export function extractClienteProduto(targetCanonical: any, requestCalls: Map<string, any>): any[] {
  const response = requestCalls.get("getClienteProduto");

  if (targetCanonical.nome === "cliente") {
    return [{
      getCustomer: {
        id: response.customer_id
      }
    }];
  } else {
    return [{
      getProduct: {
        id: response.product_id
      }
    }];
  }
}

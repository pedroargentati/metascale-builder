export function extractClienteProduto(targetCanonical: any, requestCalls: Map<string, any>, dadosParametro: any): any[] {
	const response = requestCalls.get('getClienteProduto');
  
	if (targetCanonical.nome === 'cliente') {
	  return [{
		getCustomer: {
		  id: dadosParametro['getClienteProduto']['id']
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
  
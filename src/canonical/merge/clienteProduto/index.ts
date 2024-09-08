export function mergeClienteProduto(mergeData: any, dependencyData: any): any {
  const clienteProduto = mergeData;

  const cliente = dependencyData.cliente[0];
  const produtos = dependencyData.produtos;

  if (clienteProduto.produtos.lenth > 0) {
    clienteProduto.produtos = clienteProduto.produtos.map((produto: any) => {
      const produtoData = produtos.find((p: any) => p.id === produto.idProduto);
      delete produtoData.id;

      return {
        ...produto,
        ...produtoData
      };
    });
  }

  return {
    ...clienteProduto,
    ...cliente
  };
}


// {
//     "id": 1,
//     "nome": "Alexandre Souza",
//     "email": "alexandre.souza@email.com",
//     "telefone": "(11) 95555-1234",
//     "cidade": "SÃ£o Paulo",
//     "estado": "SP"
// }

// {
//     "id": 1,
//     "nome": "Smartphone XYZ",
//     "descricao": "Latest smartphone with advanced features",
//     "dataLancamento": "2023-01-15T00:00:00.000+00:00",
//     "tipo": "mobile"
// }

// {
//     "id": 1,
//     "produtos": [
//         {
//             "idProduto": 1,
//             "dataAquisicao": "2023-06-01T00:00:00.000+00:00",
//             "feedback": "Very satisfied with the product",
//             "status": "active",
//             "preco": 999.99
//         }
//     ]
// }
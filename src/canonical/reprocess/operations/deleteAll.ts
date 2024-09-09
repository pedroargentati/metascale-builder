import { BatchWriteItemCommand, DynamoDBClient, ScanCommand, type BatchWriteItemCommandInput, type ScanCommandInput } from "@aws-sdk/client-dynamodb";

const dynamoDBClient = new DynamoDBClient({});

export async function deleteAllItems(canonical: any) {
  try {
    let ExclusiveStartKey;

    do {
      const params: ScanCommandInput = {
        TableName: canonical.nome,
        ExclusiveStartKey
      };

      const data = await dynamoDBClient.send(new ScanCommand(params));
      const items = data.Items ?? [];

      if (items.length > 0) {
        const deleteRequests = items.map(item => ({
          DeleteRequest: {
            Key: item
          }
        }));

        const deleteParams: BatchWriteItemCommandInput = {
          RequestItems: {
            [canonical.nome]: deleteRequests
          }
        };

        await dynamoDBClient.send(new BatchWriteItemCommand(deleteParams));
      }

      ExclusiveStartKey = data.LastEvaluatedKey;
    } while (ExclusiveStartKey);

    console.log(`Todos os itens do canônico ${canonical.nome} foram deletados com sucesso.`);
  } catch (err) {
    console.log(`Erro ao deletar itens do canônico ${canonical.nome}:`, err);
  }
}
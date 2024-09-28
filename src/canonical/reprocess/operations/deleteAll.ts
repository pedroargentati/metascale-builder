import {
	BatchWriteItemCommand,
	DynamoDBClient,
	ScanCommand,
	type BatchWriteItemCommandInput,
	type ScanCommandInput,
} from '@aws-sdk/client-dynamodb';
import { loggerReprocess } from '../../../config/logger/logger.js';

const dynamoDBClient = new DynamoDBClient({});

export async function deleteAllItems(canonical: any) {
	try {
		let ExclusiveStartKey;

		do {
			const params: ScanCommandInput = {
				TableName: canonical.nome,
				ExclusiveStartKey,
			};

			const data = await dynamoDBClient.send(new ScanCommand(params));
			const items = data.Items ?? [];

			if (items.length > 0) {
				const deleteRequests = items.map((item) => ({
					DeleteRequest: {
						Key: item,
					},
				}));

				const deleteParams: BatchWriteItemCommandInput = {
					RequestItems: {
						[canonical.nome]: deleteRequests,
					},
				};

				await dynamoDBClient.send(new BatchWriteItemCommand(deleteParams));
			}

			ExclusiveStartKey = data.LastEvaluatedKey;
		} while (ExclusiveStartKey);

		loggerReprocess.info(`Todos os itens do canônico ${canonical.nome} foram deletados com sucesso.`);
	} catch (err: any) {
		loggerReprocess.error(`Erro ao deletar itens do canônico ${canonical.nome}: ${err.message}`);
	}
}

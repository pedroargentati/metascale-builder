import type { LoadCallback } from "../../../types/index.js";
import {
	SYNC_OPER_CREATE,
	SYNC_OPER_DELETE,
	SYNC_OPER_READ,
	SYNC_OPER_UPDATE,
} from "../util/constants.js";

export async function synchronizeClienteProduto(
	topico: any,
	kafkaMessage: any,
	loadCallback: LoadCallback
) {
	if (topico === "db1.VivoTest.customerproduct") {
		const payload = kafkaMessage.payload;
		const operation = kafkaMessage.op;

		const customerProductId = payload.after.customer_product_id;

		await loadCallback({
			getClienteProduto: {
				id: customerProductId,
			},
		});

		if (operation === SYNC_OPER_CREATE) {
		} else if (operation === SYNC_OPER_UPDATE) {
		} else if (operation === SYNC_OPER_DELETE) {
		} else if (operation === SYNC_OPER_READ) {
		}
	}
}

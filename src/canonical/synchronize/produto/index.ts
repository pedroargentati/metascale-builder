import type { LoadCallback } from "../../../types/index.js";
import {
	SYNC_OPER_CREATE,
	SYNC_OPER_DELETE,
	SYNC_OPER_READ,
	SYNC_OPER_UPDATE,
} from "../util/constants.js";

export async function synchronizeProduto(
	topico: any,
	kafkaMessage: any,
	loadCallback: LoadCallback
) {
	if (
		topico === "db1.VivoTest.product" ||
		topico === "db1.VivoTest.productdescription"
	) {
		const payload = kafkaMessage.payload;
		const operation = kafkaMessage.op;

		const productId = payload.after.id;

		await loadCallback({
			getProduct: {
				id: productId,
			},
		});

		if (operation === SYNC_OPER_CREATE) {
		} else if (operation === SYNC_OPER_UPDATE) {
		} else if (operation === SYNC_OPER_DELETE) {
		} else if (operation === SYNC_OPER_READ) {
		}
	}
}

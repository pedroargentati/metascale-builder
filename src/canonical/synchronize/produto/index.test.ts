import { LoadCallback } from "../../../types/index.js";
import { synchronizeProduto } from "./index.js";

describe("Synchronize Produto", () => {
	it("deve chamar o loadCallback com os parâmetros corretos", () => {
		const loadCallback: LoadCallback = jest.fn();

		synchronizeProduto(
			"db1.VivoTest.product",
			{
				payload: {
					after: {
						id: 42,
					},
				},
				op: "C",
			},
			loadCallback
		);

		expect(loadCallback).toHaveBeenCalledWith({
			getProduct: {
				id: 42,
			},
		});
	});
});

import { LoadCallback } from "../../../types/index.js";
import { synchronizeClienteProduto } from "./index.js";

describe("Synchronize ClienteProduto", () => {
	it("deve chamar o loadCallback com os parâmetros corretos", () => {
		const loadCallback: LoadCallback = jest.fn();

		synchronizeClienteProduto(
			"db1.VivoTest.userproduct",
			{
				payload: {
					after: {
						user_id: 42,
					},
				},
				op: "C",
			},
			loadCallback
		);

		expect(loadCallback).toHaveBeenCalledWith({
			getClienteProduto: {
				id: 42,
			},
		});
	});
});

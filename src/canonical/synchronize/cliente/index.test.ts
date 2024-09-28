import { LoadCallback } from "../../../types/index.js";
import { synchronizeCliente } from "./index.js";

describe("Synchronize Cliente", () => {
	it("deve chamar o loadCallback com os parâmetros corretos", () => {
		const loadCallback: LoadCallback = jest.fn();

		synchronizeCliente(
			"db1.VivoTest.users",
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
			getCustomer: {
				id: 42,
			},
		});
	});
});

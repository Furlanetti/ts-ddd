import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("Customer Name");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Customer Name");
    expect(customer.Address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address("street", 22, "zip", "city");
    const customer = CustomerFactory.createWithAddress(
      "Customer Name",
      address
    );

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Customer Name");
    expect(customer.Address).toBe(address);
  });
});

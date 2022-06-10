import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John");
    }).toThrowError();
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrowError();
  });

  it("should change name", () => {
    const customer = new Customer("1234", "John");
    customer.changeName("Jane");

    expect(customer.name).toBe("Jane");
  });

  it("should activate customer", () => {
    const customer = new Customer("1234", "John");
    const address = new Address("Street", 123, "1234-11", "New York");
    customer.Address = address;

    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined for activate", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("The customer need to have an address to activate");
  });

  it("should deativate customer", () => {
    const customer = new Customer("1234", "John");
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("1234", "John");
    expect(customer.rewardPoints).toBe(0)
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10)
    customer.addRewardPoints(100);
    expect(customer.rewardPoints).toBe(110)
  });
});

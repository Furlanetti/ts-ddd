import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when item is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("should throw error if item quantity is less or equal than zero", () => {
    expect(() => {
      const item = new OrderItem("1", "Item1", 100, "product_1", -1);
      new Order("123","customer_id",[item]);
    }).toThrowError("Quantity must be greater than zero");
  });

  it("should calculate total", () => {
    const item = new OrderItem("1", "Item1", 100, "product_1", 1);
    const order = new Order("123", "123", [item]);

    const item2 = new OrderItem("1", "Item1", 50, "product_2", 2);
    const order2 = new Order("123", "123", [item, item2]);

    expect(order.total()).toBe(100);
    expect(order2.total()).toBe(200);
  });
});

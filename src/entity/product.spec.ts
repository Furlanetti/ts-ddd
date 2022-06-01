import Product from "./product";

describe("Product unit test", () => {
  it("should throw error if id is empty", () => {
    expect(() => {
      new Product("", "Product", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error if name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error if price is less than zero", () => {
    expect(() => {
      new Product("123", "Name", -10);
    }).toThrowError("Price must be grater than zero");
  });

  it("should change name", () => {
    const product = new Product("123","Name",100);
    product.changeName("New Name");

    expect(product.name).toBe("New Name");
  });

  it("should change price", () => {
    const product = new Product("123","Name",100);
    product.changePrice(200);

    expect(product.price).toBe(200);
  });
});

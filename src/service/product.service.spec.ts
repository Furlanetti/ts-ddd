import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product service unit test", () => {
  it("should change the prices of all products", () => {
    const prod1 = new Product("product1", "Product 1", 10);
    const prod2 = new Product("product2", "Product 2", 20);
    const products = [prod1, prod2];

    ProductService.increasePrice(products, 100);

    expect(prod1.price).toBe(20);
    expect(prod2.price).toBe(40);
  });
});

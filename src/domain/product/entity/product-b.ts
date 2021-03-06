import ProductInterface from "./product.interface";

export default class ProductB implements ProductInterface {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._price < 0) {
      throw new Error("Price must be grater than zero");
    }
    return true;
  }

  get id() {
    return this._id;
  }

  changePrice(newPrice: number) {
    this._price = newPrice;
    this.validate();
  }

  get price() {
    return this._price * 2;
  }

  changeName(newName: string) {
    this._name = newName;
    this.validate();
  }

  get name() {
    return this._name;
  }
}

export default class OrderItem {
  _id: string;
  _name: string;
  _price: number;
  // here we are just adding a name
  // but if we added product, it should be another entity
  // that would exist in another aggregate and should get only the id 
  // of the product
  //
  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }
}

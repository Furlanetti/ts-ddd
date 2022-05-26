export default class Address {
  _street: string = "";
  _number: number = 0;
  _zip: string = "";
  _city: string = "";

  constructor(street: string, number: number, zip: string, city: string) {
    this._zip = zip;
    this._street = street;
    this._number = number;
    this._city = city;

    this.validate();
  }

  validate() {
    if(this._street.length === 0) {
      throw new Error("Street is required");
    }
    if(this._zip.length === 0) {
      throw new Error("ZipCode is required");
    }
    if(this._city.length === 0) {
      throw new Error("City is required");
    }
    if(this._number === 0) {
      throw new Error("Number is required");
    }
  }

  toString(){
    return `${this._street},${this._number}, ${this._zip}, ${this._city}`;
  }
}



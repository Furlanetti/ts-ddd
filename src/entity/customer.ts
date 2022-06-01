import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this._active = true;
    this.validate();
  }

  isActive() {
    return this._active;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("The customer need to have an address to activate");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  get rewardPoints() {
    return this._rewardPoints;
  }

  set Address(address: Address) {
    this._address = address;
  }
}

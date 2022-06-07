import Customer from "../entity/customer";
import RepositoryInterface from "./repository-interface";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Customer> {}

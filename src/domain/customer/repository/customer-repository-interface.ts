import RepositoryInterface from "../../@shared/repository/repository-interface";
import Customer from "../entity/customer";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Customer> {}

import Customer from "./domain/customer/entity/customer";
import Address from "./domain/customer/value-object/address";

let customer = new Customer("123","Felipe Furlanetti");
const address = new Address("Street",2,"1234","City");
customer.Address = address;
customer.activate();

//const item1 = new OrderItem("1","Item 1",10);
//const item2 = new OrderItem("2","Item 2",10);

//const order = new Order("1", "123", [item1, item2]);

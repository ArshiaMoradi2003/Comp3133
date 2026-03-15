class Customer {

    firstName: string;
    lastName: string;

    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();

customer.firstName = "Arshia";
customer.lastName = "Moradi";

customer.greeter();
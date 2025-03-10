// Define the Customer class with private properties
var Customer = /** @class */ (function () {
    // Constructor to initialize properties
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method to print greeting using `this`
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// Create an instance of the Customer class with parameters
var customer = new Customer("John", "Smith");
// Call the greeter method
customer.greeter();

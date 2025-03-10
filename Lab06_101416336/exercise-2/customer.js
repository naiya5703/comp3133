// Define the Customer class
var Customer = /** @class */ (function () {
    function Customer() {
    }
    // Method to print greeting using `this`
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// Create an instance of the Customer class
var customer = new Customer();
// Assign values to the object's properties
customer.firstName = "John";
customer.lastName = "Smith";
// Call the greeter method
customer.greeter();

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hi ${this.firstName} !`
    }
}
class Customer extends Person {
    constructor(firstName, lastName, age, isMember) {
        super(firstName, lastName);
        this.age = age;
        this.isMember = isMember;
    }
}
const   mary = new Person("Mary","Johnson", 32),
        bart = new Customer("bart",'simpson',15,false);


console.log(bart.greeting());
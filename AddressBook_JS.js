console.log("Welcome to AddressBook program using JavaScript")

//Importing the neccessary module
let readlineSync = require("readline-sync");

//Created contact class
class Contact {
    //Declaring the properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    //UC1 - Initializing the parameterized constructor of class using constructor keyword
    constructor(...parameters) {
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z0-9]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        if (!namePattern.test(parameters[0]) && !namePattern.test(parameters[1]))
            throw 'First or last name should start with Cap and have minimum 3 characters';
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        if (!addressPattern.test(parameters[2]) && !addressPattern.test(parameters[3]) && !addressPattern.test(parameters[4]))
            throw 'It Should have minimum 4 characters';
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        if (!zipCodePattern.test(parameters[5]))
            throw 'Zipcode is not valid';
        this.zipCode = parameters[5];
        if (!phoneNumPattern.test(parameters[6]))
            throw 'Phone number is not valid';
        this.phoneNumber = parameters[6];
        if (!emailIdPattern.test(parameters[7]))
        throw 'Email id is not valid';
        this.emailId = parameters[7];
    }

    toString() {
        return `\nFirst Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, ZipCode: ${this.zipCode}, Phone Number: ${this.phoneNumber}, Email-Id: ${this.emailId}`;
    }
}

//UC3 - Initializing an addressbook contact array
var addressBookContactArr = new Array();

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    addressBookContactArr.push(contact);
    console.log("Contact added Succesfully");
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        let firstName = readlineSync.question('Enter Your FirstName : ');
        let lastName = readlineSync.question('Enter Your LastName : ');
        let address = readlineSync.question('Enter Your Address : ');
        let city = readlineSync.question('Enter Your City Name: ');
        let state = readlineSync.question('Enter Your State Name : ');
        let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
        let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
        let emailId = readlineSync.question('Enter Your Email Id : ');
        let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("\nContact Details: ");
        console.log(contactDetails.toString());
        AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("Contact added Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//UC3 - Function to display contacts
function DisplayContact() {
    try {
        console.log("\nContact Details Of AddressBook \n");
        if(addressBookContactArr.length !=0)
            addressBookContactArr.forEach(contact => console.log(contact.toString()));
        else
            console.log("Addressbook is empty")
    } catch (e) {
        console.error(e);
    }
}

//Function to perform addressbook operations(UC3)
function AddressBookOperations() {
    try {
        //Default contacts
        AddContact("Guruprasad", "Kumbar", "Kothali", "Belgaum", "Karnataka", "591287", "91 8971615536", "guruprasad@gmail.com");
        AddContact("Guru", "K", "Jyotiba", "Kolhapur", "Maharastra", "789456", "91 9087654321", "guru@gmail.com");
        while (true) {
            console.log("\n0: Exit \n1: Add New Contact  \n2: Display contacts");
            switch (parseInt(readlineSync.question('Enter the choice : '))) {
                case 0:
                    console.log("Exited");
                    process.exit(1)
                    break;
                case 1:
                    getContactDetails();
                    break;
                case 2:
                    DisplayContact();
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

//Calling the addressbook operation functions(UC3)
AddressBookOperations(); 
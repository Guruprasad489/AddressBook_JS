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

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\tAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\tZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\tEmail-Id: ${this.emailId}\n`;
    }
}

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    return contact;
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        //Regex patterns for validating contact details(UC2)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        //Validating first name(UC2)
        let firstName = readlineSync.question('Enter Your FirstName : ');
        if (!namePattern.test(firstName))
            throw 'First name should have minimum 3 characters';
        //Validating last name(UC2)
        let lastName = readlineSync.question('Enter Your LastName : ');
        if (!namePattern.test(lastName))
            throw 'First name should have minimum 3 characters';
        //Validating address(UC2)
        let address = readlineSync.question('Enter Your Address : ');
        if (!addressPattern.test(address))
            throw 'Address should have minimum 4 characters';
        //Validating city(UC2)
        let city = readlineSync.question('Enter Your City Name: ');
        if (!addressPattern.test(city))
            throw 'City should have minimum 4 characters';
        //Validating states(UC2)
        let state = readlineSync.question('Enter Your State Name : ');
        if (!addressPattern.test(state))
            throw 'State should have minimum 4 characters';
        //Validating zip code(UC2)
        let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
        if (!zipCodePattern.test(zipCode))
            throw 'Zipcode is not valid';
        //Validating phone number(UC2)
        let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
        if (!phoneNumPattern.test(phoneNumber))
            throw 'Phone number is not valid';
        //Validating email id(UC2)
        let emailId = readlineSync.question('Enter Your Email Id : ');
        if (!emailIdPattern.test(emailId))
            throw 'Email id is not valid';
        let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("\nContact Details: ");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}

//Calling the function
getContactDetails();
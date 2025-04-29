#include "client.h"

Client::Client(int id, string firstName, string lastName, string phoneNumber) :
id(id), firstName(firstName), lastName(lastName), phoneNumber(phoneNumber) {}



void Client::registerAcc(std::istream &in, std::ostream &out){
    out << "Client ID (4 digits): ";
    in >> id;

    out << endl << "First Name: ";
    in >> firstName;

    out << endl << "Last name: ";
    in >> lastName;

    out << "Phone Number: +359";
    in >> phoneNumber;

    out << endl << "Client Registered!" << endl;
}

string Client::getFirstName(){
    return firstName;
}
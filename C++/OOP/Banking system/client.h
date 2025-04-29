#pragma once
#include <iostream>
#include <string>

using std::string;
using std::cin;
using std::cout;
using std::endl;

class Client{
public:
    Client(int id, string firstName, string lastName, string phoneNumber);

    void registerAcc(std::istream &in, std::ostream &out);

    string getFirstName();

private:
    int id;
    string firstName;
    string lastName;
    string phoneNumber;
};
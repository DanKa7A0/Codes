#pragma once
#include <iostream>
#include <iomanip>
#include <string>
#include <vector>

#include "account.h"

using std::string;
using std::cin;
using std::cout;
using std::endl;
using std::vector;

class Client {
public:
    Client(int id, string firstName, string lastName, string phoneNumber);

    void registerAcc(std::istream &in, std::ostream &out);

    string getFullName();
    int getId();

    void pushAccount(Account* acc);
    void printAccounts(std::ostream &out);

private:
    int id;
    string firstName;
    string lastName;
    string phoneNumber;
    vector<Account*> accounts;
};
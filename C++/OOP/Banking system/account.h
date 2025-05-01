#pragma once

#include <string>

using std::string;

class Account {
public:
    Account(int client_ID, string account_ID);
    virtual double getBalance() const;

protected:
    int client_ID;
    string account_ID;
    double balance = 100;
};
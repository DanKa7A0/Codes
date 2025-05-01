#pragma once

#include <string>

using std::string;

class Account {
public:
    Account(int client_ID, string account_ID);
    double getBalance() const;

protected:
    int client_ID;
    string account_ID;
    double balance = 100;
    int transactionFee = 0;
    double withdrawalsFee = 0;
};
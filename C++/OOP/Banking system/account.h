#pragma once

#include <string>

using std::string;

class Account {
public:
    Account(int client_ID, string account_ID);

    double getBalance() const;
    string getAccount_ID() const;
    string getAccountType() const;
    double getWithdrawFee() const;

    void depositMoney(double deposit);
    void withdrawMoney(double withdraw);


protected:
    int client_ID;
    string account_ID;
    string accountType;
    double balance = 100;
    int transactionFee = 0;
    double withdrawFee = 0;
};
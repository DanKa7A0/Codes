#pragma once
#include <map>
#include <string>

using std::string;
using std::map;

class Account {
public:
    Account(int client_ID, string account_ID);

    // encapsulation
    double getBalance() const;
    string getAccount_ID() const;
    string getAccountType() const;
    double getTransactionFee() const;
    double getWithdrawFee() const;

    // functional
    void depositMoney(double deposit);
    void withdrawMoney(double withdraw);
    void transferMoney(string account_ID, int transfer, map<string, Account*>accounts);


protected:
    int client_ID;
    string account_ID;
    string accountType;
    double balance = 100;
    double transactionFee = 0;
    double withdrawFee = 0;
};
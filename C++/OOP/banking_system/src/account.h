#pragma once
#include <iostream>
#include <iomanip>
#include <map>
#include <string>
#include <vector>

using std::cout;
using std::endl;
using std::string;
using std::map;
using std::vector;

class Account {
public:
    Account(int client_ID, string account_ID);

    // encapsulation
    double getBalance() const;
    int    getClient_ID() const;
    string getAccount_ID() const;
    string getAccountType() const;
    double getTransferFee() const;
    double getWithdrawFee() const;
    vector<string> getTransactions() const;

    // functional
    void depositMoney(double deposit);
    void withdrawMoney(double withdraw);
    void transferMoney(string account_ID, int transfer, map<string, Account*>accounts);
    void addTransaction(string type, double money);
    void printLastTransactions(std::ostream &out);


protected:
    string accountType;
    double balance = 100;
    double transferFee = 0;
    double withdrawFee = 0;

private:
    int client_ID;
    string account_ID;
    vector<string> transactions;
};
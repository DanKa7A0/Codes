#include "account.h"

Account::Account(int client_ID, string account_ID): client_ID(client_ID), account_ID(account_ID){}

double Account::getBalance() const {
    return balance;
}

string Account::getAccount_ID() const {
    return account_ID;
}

string Account::getAccountType() const {
    return accountType;
}

double Account::getWithdrawFee() const{
    return withdrawFee;
}

void Account::depositMoney(double deposit) {
    balance += deposit;
}

void Account::withdrawMoney(double withdraw) {
    balance -= (withdraw + withdrawFee);
}

#include "account.h"

Account::Account(int client_ID, string account_ID): client_ID(client_ID), account_ID(account_ID){}

// encapsulation
double Account::getBalance() const {
    return balance;
}
string Account::getAccount_ID() const {
    return account_ID;
}
string Account::getAccountType() const {
    return accountType;
}
double Account::getTransactionFee() const{
    return transactionFee;
}
double Account::getWithdrawFee() const{
    return withdrawFee;
}


// functional 
void Account::depositMoney(double deposit) {
    balance += deposit;
}
void Account::withdrawMoney(double withdraw) {
    balance -= (withdraw + withdrawFee);
}
void Account::transferMoney(string account_ID, int transfer, map<string, Account*> accounts){
    balance -= (transfer * getTransactionFee());

    if (accounts.find(account_ID) != accounts.end()){
        accounts.at(account_ID)->depositMoney(transfer);
    }
}

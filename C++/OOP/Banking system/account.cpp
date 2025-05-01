#include "account.h"

Account::Account(int client_ID, string account_ID): client_ID(client_ID), account_ID(account_ID){}

double Account::getBalance() const {
    return balance;
}

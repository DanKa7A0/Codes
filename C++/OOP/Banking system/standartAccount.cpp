#include "standartAccount.h"

StandartAccount::StandartAccount(int client_ID, string account_ID) : Account(client_ID, account_ID){}

double StandartAccount::getBalance() const {
    return balance;
}

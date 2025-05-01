#include "standartAccount.h"

StandartAccount::StandartAccount(int client_ID, string account_ID) : Account(client_ID, account_ID){
    transactionFee = 1;
    withdrawalsFee = 0.50;
    balance += 200;
}

// double StandartAccount::getBalance() const {
//     return balance;
// }

#pragma once

#include "account.h"

class StandartAccount : public Account {
public:
    StandartAccount(int client_ID, string account_ID);
    double getBalance() const override;
private:
    int transactionFee = 1;
    double withdrawalsFee = 0.50;
};
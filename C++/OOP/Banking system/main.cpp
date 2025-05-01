#include "account.h"
#include "client.h"
#include "standartAccount.h"
#include "premiumAccount.h"

#include <iostream>
#include <fstream> // Added for std::ifstream
#include <map>

using namespace std;

int main(int argc, char const *argv[]){
    map<string, Account*> accounts;
    map<int, Client> clients;

    // make input stream
    string command;    
    istream* input = &std::cin; // Default to std::cin
    ifstream testInput;
    if (argc > 1) { // if a test file is provided read from it
        testInput.open(argv[1]);
        if (!testInput) {
            cerr << "Could not open test file." << endl;
            return 1;
        }
        input = &testInput; // Use file if provided

    }

    cout << "[1] Register Client:" << endl;
    cout << "[2] Open Account" << endl;
    cout << "[3] List Client Accounts" << endl;
    cout << "[4] Deposit" << endl;
    cout << "[5] Withdraw" << endl;
    cout << "[6] Transfer" << endl;
    cout << "[7] Show Account" << endl;
    cout << "[8] Exit" << endl << endl;

    string cmd;
    while (*input >> cmd) {
        // cout << cmd << endl;
        // continue;
        if (cmd == "1") {
            int client_ID;
            string firstName;
            string lastName;
            string phoneNumber;

            cout << "Client ID (4 digits): ";
            *input >> client_ID;

            cout << endl << "First Name: ";
            *input >> firstName;

            cout << endl << "Last name: ";
            *input >> lastName;

            cout << endl << "Phone Number: ";
            *input >> phoneNumber;
            
            Client client(client_ID, firstName, lastName, phoneNumber);
            clients.insert({client_ID, client});
        
            cout << endl << "Client Registered!" << endl << endl;
        }

        if (cmd == "2") {           
            int client_ID;
            string account_ID;
            string accountType;
            
            cout << "Client ID: ";
            *input >> client_ID;
            // cout << client_ID;

            cout << endl << "Accout number: ";
            *input >> account_ID;
            // cout << account_ID;

            cout << endl << "Type (standart/premium): ";
            *input >> accountType;
            // cout << accountType << endl;
                
            if (accountType == "standart") {
                Account* account = new StandartAccount(client_ID, account_ID);
                cout << account_ID << endl;
                accounts.insert({account_ID, account});
                clients.at(client_ID).pushAccount(account);
                cout << endl << "Account created! Balance: " << account->getBalance() << endl;
            }

            if (accountType == "premium") {
                Account* account = new PremiumAccount(client_ID, account_ID);
                accounts.insert({account_ID, account});
                clients.at(client_ID).pushAccount(account);
                cout << endl << "Account created! Balance: " << account->getBalance() << endl << endl;
            }                        
        }

        if (cmd == "3") {
            int client_ID;            
            cout << "Client ID: ";
            *input >> client_ID;
            cout << endl;
            clients.at(client_ID).printAccounts(cout);
            
        }

        if (cmd == "8") {
            break;
        }
    }


    


    return 0;
}

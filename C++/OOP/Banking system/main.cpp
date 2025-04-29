#include "account.h"
#include "client.h"

#include <iostream>
#include <map>

using namespace std;

int main(int argc, char const *argv[]){
    map<int, Account> accounts = {};
    map<int, Client> clients = {};

    cout << "[1] Register Client:" << endl;
    cout << "[2] Open Account" << endl;
    cout << "[3] List Client Accounts" << endl;
    cout << "[4] Deposit" << endl;
    cout << "[5] Withdraw" << endl;
    cout << "[6] Transfer" << endl;
    cout << "[7] Show Account" << endl;
    cout << "[8] Exit" << endl;

    string cmd;
    while (cin >> cmd) {
        if (cmd == "1") {
            int id;
            string firstName;
            string lastName;
            string phoneNumber;

            cout << "Client ID (4 digits): ";
            cin >> id;

            cout << endl << "First Name: ";
            cin >> firstName;

            cout << endl << "Last name: ";
            cin >> lastName;

            cout << "Phone Number: ";
            cin >> phoneNumber;
            
            Client client(id, firstName, lastName, phoneNumber);
            clients[id] = client;

            int acc_ID;
            cin >> acc_ID;
            cout << clients[acc_ID].getFirstName();

            cout << endl << "Client Registered!" << endl;
        }

        if (cmd == "8"){
            break;
        }
    }

    return 0;
}

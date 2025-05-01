#include "account.h"
#include "client.h"

#include <iostream>
#include <fstream> // Added for std::ifstream
#include <map>

using namespace std;

int main(int argc, char const *argv[]){
    map<int, Account> accounts;
    map<int, Client> clients;

    cout << "[1] Register Client:" << endl;
    cout << "[2] Open Account" << endl;
    cout << "[3] List Client Accounts" << endl;
    cout << "[4] Deposit" << endl;
    cout << "[5] Withdraw" << endl;
    cout << "[6] Transfer" << endl;
    cout << "[7] Show Account" << endl;
    cout << "[8] Exit" << endl;


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

    string cmd;
    while (*input >> cmd) {
        if (cmd == "1") {
            int id;
            string firstName;
            string lastName;
            string phoneNumber;

            cout << "Client ID (4 digits): ";
            *input >> id;

            cout << endl << "First Name: ";
            *input >> firstName;

            cout << endl << "Last name: ";
            *input >> lastName;

            cout << endl << "Phone Number: ";
            *input >> phoneNumber;
            
            Client client(id, firstName, lastName, phoneNumber);
            clients.insert({id, client});

            cout << endl << "Client Registered!" << endl;
        }

        if (cmd == "8") {
            break;
        }
    }

    return 0;
}

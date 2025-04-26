#include <iostream>

#include "order.h"


int main(int argc, char const *argv[]){
    Order order;
    order.printWelcomeMessage(std::cout);

    std::string command;    
    while (std::cin >> command) {
        if (command == "end") {
            break;
        }

        if (command == "add") {
            std::string name;
            double price;
            std::cin >> name >> price;
            Item item(name, price);
            order.addItem(item);
            continue;
        }

        if (command == "print") {
            order.printOrder(std::cout);
            continue;
        }

        std::cout << "Unknown command: " << command << std::endl;    
    }

    return 0;
}

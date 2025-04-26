#include <iostream>

#include "order.h"
#include "discount.h"

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

        if (command == "discount") {
            std::string type;
            double discountValue;
            std::cin >> type >> discountValue;

            if (type == "percentage") {
                order.setDiscount(new Percentage(discountValue));
                continue;
            }
            if (type == "flat") {
                order.setDiscount(new Flat(discountValue));
                continue;
            }

            std::cout << "Unknown discount type: " << type << std::endl;            
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

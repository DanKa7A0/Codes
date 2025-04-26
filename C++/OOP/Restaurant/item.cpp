#include "item.h"

Item::Item(const std::string &name, double price) : name(name), price(price) {}

void Item::getName() const {

}

double Item::getPrice() const {
    return price;
}

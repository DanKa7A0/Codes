#pragma once
#include "item.h"
#include <vector>

class Order {    
public:
    void addItem(Item item);
    void printOrder(std::ostream &out) const;
    void printWelcomeMessage(std::ostream &out) const;

private:
    std::vector<Item> items;
};
#pragma once
#include "item.h"
#include <vector>

class Order {    
public:
    void addItem(Item item);
    void displayOrder() const;

private:
    std::vector<Item> items;
    double totalSum = 0.0;
};
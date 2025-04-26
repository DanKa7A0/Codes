#include "order.h"

void Order::addItem(Item item){
    items.push_back(item);
    this->totalSum += item.getPrice();
}
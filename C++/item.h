#pragma once
#include <string>

class Item {
public:
    Item(const std::string& name, double price);

    void getName() const;
    void getPrice() const;

private:
    std::string name;
    double price;    
};
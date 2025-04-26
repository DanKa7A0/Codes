#pragma once
#include <string>

class Item {
public:
    Item(const std::string& name, double price);

    void getName() const;
    double getPrice() const;

private:
    std::string name;
    double price;
};
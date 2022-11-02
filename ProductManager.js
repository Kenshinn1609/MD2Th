"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var Product_1 = require("./Product");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager.addProduct = function (name, sectors, price, amount, describe) {
        var newProduct = new Product_1.Product(name, this.MaxId, sectors, price, amount, describe);
        this.products.push(newProduct);
        this.MaxId++;
    };
    ProductManager.showProduct = function () {
        console.table(ProductManager.products);
    };
    ProductManager.searchByName = function (value) {
        {
            var array = this.products.filter(function (product) {
                return product.getname().includes(value);
            });
            console.log('There are ' + array.length + 'product match the search criteria ' + value);
            if (array.length) {
                console.table(array);
            }
            else {
                console.log('khong co mat hang phu hop');
            }
        }
    };
    ProductManager.deleteProduct = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].getId() === id) {
                this.products.splice(i, 1);
            }
        }
    };
    ProductManager.MaxId = 1;
    ProductManager.products = [];
    return ProductManager;
}());
exports.ProductManager = ProductManager;

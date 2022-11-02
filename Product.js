"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, Id, sectors, price, amount, describe) {
        this._name = name;
        this._Id = Id;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._date = new Date();
        this._describe = describe;
    }
    Product.prototype.getname = function () {
        return this._name;
    };
    Product.prototype.setname = function (value) {
        this._name = value;
    };
    Product.prototype.getId = function () {
        return this._Id;
    };
    Product.prototype.setId = function (value) {
        this._Id = value;
    };
    Product.prototype.getsectors = function () {
        return this._sectors;
    };
    Product.prototype.setsectors = function (value) {
        this._sectors = value;
    };
    Product.prototype.getprice = function () {
        return this._price;
    };
    Product.prototype.setprice = function (value) {
        this._price = value;
    };
    Product.prototype.getamount = function () {
        return this._amount;
    };
    Product.prototype.setamount = function (value) {
        this._amount = value;
    };
    Product.prototype.getdate = function () {
        return this._date;
    };
    Product.prototype.setdate = function (value) {
        this._date = value;
    };
    Product.prototype.getdescribe = function () {
        return this._describe;
    };
    Product.prototype.setdescribe = function (value) {
        this._describe = value;
    };
    return Product;
}());
exports.Product = Product;

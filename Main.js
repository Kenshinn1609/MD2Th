"use strict";
exports.__esModule = true;
var ProductManager_1 = require("./ProductManager");
var Menu_1 = require("./Menu");
ProductManager_1.ProductManager.addProduct('tao', 'hoa qua', 10000, 10, 'ngon');
ProductManager_1.ProductManager.addProduct('le', 'hoa qua', 10000, 10, 'ngon');
ProductManager_1.ProductManager.addProduct('dao', 'hoa qua', 10000, 10, 'ngon');
ProductManager_1.ProductManager.addProduct('dua', 'hoa qua', 10000, 10, 'ngon');
ProductManager_1.ProductManager.addProduct('oi', 'hoa qua', 10000, 10, 'ngon');
ProductManager_1.ProductManager.addProduct('coc', 'hoa qua', 10000, 10, 'ngon');
Menu_1.Menu.mainMenu();
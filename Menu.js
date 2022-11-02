"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var readline = require("readline-sync");
var ProductManager_1 = require("./ProductManager");
var Run;
(function (Run) {
    Run[Run["Exit"] = 0] = "Exit";
    Run[Run["Show"] = 1] = "Show";
    Run[Run["add"] = 2] = "add";
    Run[Run["search"] = 3] = "search";
    Run[Run["delete"] = 4] = "delete";
    Run[Run["edit"] = 5] = "edit";
})(Run || (Run = {}));
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.showMenu = function () {
        console.clear();
        console.log("1.Show danh sach hang hoa");
        console.log("2.Them 1 mat hang");
        console.log("3.Tim kiem 1 mat hang");
        console.log("4.Xoa mat hang");
        console.log("5.Chinh sua mat hang");
        console.log("0.Exit");
    };
    Menu.mainMenu = function () {
        Menu.showMenu();
        var runModule = true;
        while (runModule) {
            var run = +readline.question("Input number to select");
            switch (run) {
                case Run.Exit:
                    runModule = false;
                    return;
                case Run.Show:
                    ProductManager_1.ProductManager.showProduct();
                    break;
                case Run.add:
                    var name_1 = readline.question('ten mat hang la :');
                    var sectors = readline.question('loai hang :');
                    var price = readline.questionInt('gia:');
                    var amount = readline.questionInt('so luong :');
                    var describe = readline.question('mo ta:');
                    ProductManager_1.ProductManager.addProduct(name_1, sectors, price, amount, describe);
                    break;
                case Run.search:
                    var ten = readline.question('ten can tim la :');
                    ProductManager_1.ProductManager.searchByName(ten);
                    break;
                case Run["delete"]:
                    var id = readline.questionInt('id can tim la');
                    ProductManager_1.ProductManager.deleteProduct(id);
                    break;
                case Run.edit:
                    break;
            }
        }
    };
    return Menu;
}());
exports.Menu = Menu;

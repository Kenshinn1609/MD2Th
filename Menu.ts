import  * as readline from 'readline-sync'
import {Product} from "./Product";
import {ProductManager} from "./ProductManager";
enum Run {
    Exit,
    Show ,
    add,
    search,
    delete,
    edit,
}
export class Menu {
    static showMenu(): void {
        console.clear();
        console.log("1.Show danh sach hang hoa");
        console.log("2.Them 1 mat hang");
        console.log("3.Tim kiem 1 mat hang");
        console.log("4.Xoa mat hang");
        console.log("5.Chinh sua mat hang");
        console.log("0.Exit")
    }
    static mainMenu():void {
        Menu.showMenu();
        let runModule = true;
        while (runModule){

            let run = +readline.question("Input number to select");
            switch (run){
                case Run.Exit :
                    runModule = false
                    return;
                case Run.Show:
                    ProductManager.showProduct();

                    break
                case Run.add :
                    let name = readline.question('ten mat hang la :')
                    let sectors = readline.question('loai hang :')
                    let price = readline.questionInt('gia:')
                    let amount = readline.questionInt('so luong :')
                    let describe = readline.question('mo ta:')
                    ProductManager.addProduct(name, sectors,price,amount,describe);
                    break
                case Run.search :
                    let ten = readline.question('ten can tim la :')
                    ProductManager.searchByName(ten);
                    break
                case Run.delete :
                    let id = readline.questionInt('id can tim la')
                    ProductManager.deleteProduct(id);
                    break;
                case Run.edit :
                    break
            }


        }
    }

}

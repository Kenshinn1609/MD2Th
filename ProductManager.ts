import  * as readline from 'readline-sync'
import {Product} from "./Product";
export class ProductManager {
    static MaxId = 1;
    static products: Product[] = [];

    static addProduct(name: string, sectors: string, price: number, amount: number , describe: string) {
        const newProduct = new Product(name, this.MaxId, sectors, price, amount,  describe)
        this.products.push(newProduct)
        this.MaxId++
    }

    static showProduct() {
        console.table(ProductManager.products)
    }

    static searchByName(value: string) {
        {
            let array = this.products.filter(product => {
                return product.getname().includes(value)
            })
            console.log('There are ' + array.length + 'product match the search criteria ' + value);
            if (array.length) {
                console.table(array);
            }
            else {
                console.log('khong co mat hang phu hop')
            }
        }
    }
    static deleteProduct(id :number) {
        for (
            let i = 0; i < this.products.length; i++) {
            if (this.products[i].getId() === id) {
                this.products.splice(i, 1)
            }
        }
    }








}
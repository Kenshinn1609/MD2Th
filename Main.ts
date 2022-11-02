import  * as readline from 'readline-sync'
import {Product} from "./Product";
import {ProductManager} from "./ProductManager";
import {Menu} from "./Menu";
ProductManager.addProduct('tao','hoa qua',10000,10,'ngon')
ProductManager.addProduct('le','hoa qua',10000,10,'ngon')
ProductManager.addProduct('dao','hoa qua',10000,10,'ngon')
ProductManager.addProduct('dua','hoa qua',10000,10,'ngon')
ProductManager.addProduct('oi','hoa qua',10000,10,'ngon')
ProductManager.addProduct('coc','hoa qua',10000,10,'ngon')
Menu.mainMenu()

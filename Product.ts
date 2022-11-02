export class Product {
  private _name : string;
   private _Id? : number;
    private _sectors : string;
    private _price : number ;
    private _amount : number ;
    private _date : Date ;
    private _describe : string;

    constructor(name: string, Id: number, sectors: string, price: number, amount: number , describe: string) {
        this._name = name;
        this._Id = Id;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._date = new Date();
        this._describe = describe;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getId(): number {
        return this._Id;
    }

    setId(value: number) {
        this._Id = value;
    }

    getsectors(): string {
        return this._sectors;
    }

    setsectors(value: string) {
        this._sectors = value;
    }

    getprice(): number {
        return this._price;
    }

    setprice(value: number) {
        this._price = value;
    }

    getamount(): number {
        return this._amount;
    }

    setamount(value: number) {
        this._amount = value;
    }

    getdate(): Date {
        return this._date;
    }

    setdate(value: Date) {
        this._date = value;
    }

    getdescribe(): string {
        return this._describe;
    }

    setdescribe(value: string) {
        this._describe = value;
    }
}
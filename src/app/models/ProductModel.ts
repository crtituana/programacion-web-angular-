import { Category } from './Category';

export class ProductModel{
    id: number;
    name:string;
    stock: number;
    price:number;
    category:Category;
    constructor(){
        this.id= 0;
        this.name = '';
        this.stock = 0;
        this.price = 0;
        this.category = new Category();
    }
}


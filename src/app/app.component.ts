import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { ProductModel } from './models/ProductModel';
import { from } from 'rxjs';
import { ProductModule } from './products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'inventario-Client';
  url = "products";
  product: ProductModel;
  products:Array<ProductModel>;
  constructor(private service: ServicesService){

  }
  ngOnInit(){
    this.product = new ProductModel();
    this.products = new Array<ProductModel>();
  }
  createProduct(data: any){
    this.service.post(this.url, data);
  };

  getProduct(){
    this.service.get(this.url).subscribe(response=>{
      this.products=response['products'];
    }, error=>{
      console.log("no saqlio bien");
    }
    );
  };

  updateProduct(){
    let data={
      product:{
        name:"uva",
        stock: 2,
        price:3.45
      },
      category:{
        id:1
      }
    }
    this.service.update(this.url, data);
    
  }
  
  deleteProduct(){
    this.service.delete(this.url).subscribe(
      response=>{
        console.log("exitosamente eliminado");
      },error=>{
        console.log("eliminado fallido");
      });
  };

}

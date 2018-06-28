import { Component } from '@angular/core';
import { IndicadorsService } from './indicadors.service';
import { ProductosService } from './productos.service';
import { Producto } from './producto';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Lista de Productos';
    idProducto = '';
    
    productosL = [];
    

     //constructor(private http: Http) {}
     constructor(private productosService: ProductosService, private http: Http) { }
     prueba(): void{
     
     }

  llenarLista() {
      this.productosL = [];
       this.productosService.listarProductos()
       .subscribe(
           (res: Response) => {
             const lista = res.json();
             console.log(lista);
             this.productosL = lista;
            }, err => {
             console.log('Error:');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
           }
       );
     }


 verProduct() {
        this.productosL = [];
       this.productosService.verProducto(this.idProducto)
       .subscribe(
           (res: Response) => {
             const producto = res.json();
             console.log(producto);
             this.productosL[0] = producto;
            }, err => {
             console.log('Error:');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
           }
       );
     }
     

     

     


}

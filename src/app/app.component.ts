import { Component, ViewChild } from '@angular/core';
import { IndicadorsService } from './indicadors.service';
import { ProductosService } from './productos.service';
import { Producto } from './producto';
import { Http, Response} from '@angular/http';
import { MatTable } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Lista de Productos';
    idProducto = '';
    displayedColumns: string[] = ['id', 'nombre', 'precio'];
    dataSource = ELEMENT_DATA;
    @ViewChild(MatTable) table: MatTable<any>;

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
       this.table.renderRows();
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
           this.table.renderRows();
     }
     

     

     


}

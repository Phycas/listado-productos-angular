import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Producto } from './producto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

constructor(private http: Http) { }

productosURL = 'http://localhost:8080/products';

listarProductos(){
     return this.http.get(this.productosURL);
     }

verProducto(id){
     return this.http.get('http://localhost:8080/product/' + id);
     }


}

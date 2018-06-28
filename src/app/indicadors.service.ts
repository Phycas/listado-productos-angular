import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class IndicadorsService {

  constructor(private http: Http) { }
 valor = '';
  getAlgo(){
  return "hola desde servicio";
  }


buscarIndicador2(indica, fecha) {
		
       return this.http.get('http://mindicador.cl/api/' + indica + '/' + fecha);
       }
       
buscarIndicador(indica, fecha) {
		
       this.http.get('https://mindicador.cl/api/' + indica + '/' + fecha)
       .subscribe(
           (res: Response) => {
             const valueIndicator = res.json();
             console.log(valueIndicator);
             this.valor = valueIndicator['serie'][0]['valor'];
            }
       );
       return this.valor;

     }

 }



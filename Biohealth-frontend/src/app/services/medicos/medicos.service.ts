import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  public obtenerMedicos(): Promise<any>{
    console.log('entra al servicio')
    const url = `${environment.apiUrl}/getMedicos`;
  //  const headers = new HttpHeaders().set("isadmin","true");
  //  return this.http.get(url, { 'headers': headers }).toPromise();
  return this.http.get(url).toPromise();
  }
  public obtenerMedico(id: number){}
  public agregarMedico(cancion: any){}
  public actualizarMedico(cancion: any, id: number){}
  public eliminarMEdico(id: number){}
}

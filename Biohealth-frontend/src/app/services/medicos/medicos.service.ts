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
    const url = `${environment.apiUrl}/getMedicos`;
    return this.http.get(url).toPromise();
  }
  public obtenerMedico(id: number){}
  public agregarMedico(cancion: any){}
  public actualizarMedico(cancion: any, id: number){}

  public eliminarMedico(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/deleteMedico/${id}`).toPromise();

  }
}

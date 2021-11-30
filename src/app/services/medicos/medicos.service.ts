import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Medicomodel } from 'src/app/models/medico';


@Injectable({
  providedIn: 'root'
})

export class MedicosService {

  constructor(private http: HttpClient) { }

  public obtenerMedicos(): Promise<any>{
    const url = `${environment.apiUrl}/getMedicos`;
    return this.http.get(url).toPromise();
  }
  public obtenerMedico(id: number): Promise<any>{
    const url = `${environment.apiUrl}/getMedico/${id}`;
    return this.http.get(url).toPromise();
  }

  public agregarMedico(medico: any): Promise<any> {
    const url = `${environment.apiUrl}/addMedico`;
    return this.http.post(url, medico).toPromise();    
  }
  public actualizarMedico(medico: Medicomodel): Promise<any>{
    const url = `${environment.apiUrl}/updateMedico/${medico.idMedico}`
    return this.http.put(url, medico).toPromise();    
  }

  public eliminarMedico(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/deleteMedico/${id}`).toPromise();

  }
}

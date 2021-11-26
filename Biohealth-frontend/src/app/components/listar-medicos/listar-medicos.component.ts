import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicomodel } from 'src/app/models/medico';
import { MedicosService } from '../../services/medicos/medicos.service';


@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.scss']
})
export class ListarMedicosComponent implements OnInit {

  public medicos: Medicomodel[] = [];

  constructor(private medicosService: MedicosService, private router: Router) { }

  async ngOnInit(): Promise<void>{
    localStorage.clear();
    this.medicos = await this.obtenerMedicos();
      
  }

  public async obtenerMedicos(): Promise<any>{
    try{
      const response = await this.medicosService.obtenerMedicos();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
    }
    
  }

  public eliminarMedico(id:number){
    this.medicosService.eliminarMedico(id).then(async response =>{
      if(response.message === 'deleted'){
        this.medicos = await this.obtenerMedicos();
        alert('Medico eliminado correctamente');
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public irActualizarMedico(medico: Medicomodel){
    localStorage.setItem('medicoActualizar', JSON.stringify(medico));
    this.router.navigate(['/crear-medico']);
  }

}

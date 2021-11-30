import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicomodel } from 'src/app/models/medico';
import { MedicosService } from 'src/app/services/medicos/medicos.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  public medico: Medicomodel | null = null;

  constructor(private medicosService: MedicosService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    localStorage.clear();
    this.medico= await this.obtenerMedico(38);
    
  }
  public async obtenerMedico(id:number): Promise<any> {
    try {
      const response = await this.medicosService.obtenerMedico(id);
      return response.datos;
    } catch (error) {
      this.router.navigate(['/error']);
    }
  }
  public editarMedico(medico: Medicomodel){
    localStorage.setItem('medicoActualizar', JSON.stringify(medico));
    this.router.navigate(['/editar-perfil']);
  }
}

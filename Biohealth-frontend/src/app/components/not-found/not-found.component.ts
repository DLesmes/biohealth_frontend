import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/services/medicos/medicos.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private medicosService: MedicosService) { }

  ngOnInit(): void {
    console.log('entra al componente')
    this.obtenerMedicos();
  }

  public async obtenerMedicos(){
    try{
      const response = await this.medicosService.obtenerMedicos();
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

}

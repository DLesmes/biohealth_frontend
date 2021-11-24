import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicosService } from '../../services/medicos/medicos.service';
import { Medicomodel } from '../../models/medico';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.scss']
})
export class CrearMedicoComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public medicoActualizar: Medicomodel | null = null;

  constructor(private formBuilder: FormBuilder, 
    private medicosService: MedicosService, 
    private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('medicoActualizar');
    this.medicoActualizar = actualizar ? JSON.parse(actualizar) : null;
    console.log(this.medicoActualizar);
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      primerNombre: [this.medicoActualizar?.primerNombre, [Validators.required, Validators.maxLength(9)]],
      segundoNombre: [this.medicoActualizar?.segundoNombre, Validators.required],
      primerApellido: [this.medicoActualizar?.primerApellido, Validators.required],
      segundoApellido: [this.medicoActualizar?.segundoNombre, Validators.required],
      usuario: [this.medicoActualizar?.usuario, Validators.required],
      contraseña:[this.medicoActualizar?.contrasena, Validators.required],
      fotoUsuario:[this.medicoActualizar?.fotoUsuario, Validators.required],
      firma:[this.medicoActualizar?.firma, Validators.required]
    });

  }

  public agregarMedico(){
    console.log(this.formGroup.value);
    this.medicosService.agregarMedico(this.formGroup.value).then(response =>{
      alert('Medico creado correctamente');
      this.router.navigate(['/medicos']);

    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }

  public actualizarMedico(){
    console.log(this.formGroup.value);
    const medico: Medicomodel = {
      idMedico: this.medicoActualizar?.idMedico,
      ...this.formGroup.value
    }
    this.medicosService.actualizarMedico(medico).then(response =>{
      if(response.message === 'update'){
        alert('Medico actualizado correctamente');
        this.router.navigate(['/medicos']);
      }
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }

}

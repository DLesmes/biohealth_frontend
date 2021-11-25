import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicomodel } from 'src/app/models/medico';
import { MedicosService } from 'src/app/services/medicos/medicos.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {
  public perfilForm: FormGroup = new FormGroup({});
  public perfilActualizar: Medicomodel | null = null;

  constructor(
    private fb: FormBuilder,
    private medicosService: MedicosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const actualizar = localStorage.getItem('medicoActualizar');
    this.perfilActualizar = actualizar ? JSON.parse(actualizar) : null;
    console.log('Hi');
    console.log(this.perfilActualizar);
    this.buildForm();
  }
  buildForm() {
    this.perfilForm = this.fb.group({
      primerNombre:[this.perfilActualizar?.primerNombre,Validators.required],
      segundoNombre:[this.perfilActualizar?.segundoNombre,Validators.required],
      primerApellido:[this.perfilActualizar?.primerApellido,Validators.required],
      segundoApellido:[this.perfilActualizar?.segundoApellido,Validators.required],
      usuario:[this.perfilActualizar?.usuario,Validators.required],
      contraseña:[this.perfilActualizar?.contrasena,Validators.required],
      firma:[this.perfilActualizar?.firma,Validators.required],
  
      })
  }
  modificarPerfil() {
    console.log(this.perfilForm);
  }
}

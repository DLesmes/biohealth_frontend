import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
    primerNombre:['',Validators.required],
    segundoNombre:['',Validators.required],
    primerApellido:['',Validators.required],
    segundoApellido:['',Validators.required],
    usuario:['',Validators.required],
    contraseña:['',Validators.required],
    firma:['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  modificarPerfil(){
    console.log(this.perfilForm)


  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './encabezados/header/header.component';
import { NavbarComponent } from './encabezados/navbar/navbar.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { ListaMedicamentosModalComponent } from './lista-pacientes/lista-medicamentos-modal/lista-medicamentos-modal.component';
import { ListaIncapacidadesModalComponent } from './lista-pacientes/lista-incapacidades-modal/lista-incapacidades-modal.component';
import { ListaExamenesModalComponent } from './lista-pacientes/lista-examenes-modal/lista-examenes-modal.component';
import { AtendiendoPacienteComponent } from './atendiendo-paciente/atendiendo-paciente.component';
import { PacientesPrincipalComponent } from './pacientes/pacientes-principal/pacientes-principal.component';
import { PacientesNuevoEditarComponent } from './pacientes/pacientes-nuevo-editar/pacientes-nuevo-editar.component';
import { PacientesPerfilComponent } from './pacientes/pacientes-perfil/pacientes-perfil.component';
import { PacientesListaMedicamentosComponent } from './pacientes/pacientes-lista-medicamentos/pacientes-lista-medicamentos.component';
import { PacientesListaExamenesComponent } from './pacientes/pacientes-lista-examenes/pacientes-lista-examenes.component';
import { PacientesHistoriaClinicaComponent } from './pacientes/pacientes-historia-clinica/pacientes-historia-clinica.component';
import { MedicamentosPrincipalComponent } from './medicamentos/medicamentos-principal/medicamentos-principal.component';
import { MedicamentosNuevoEditarModalComponent } from './medicamentos/medicamentos-nuevo-editar-modal/medicamentos-nuevo-editar-modal.component';
import { SoporteComponent } from './soporte/soporte.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    PerfilMedicoComponent,
    ListaMedicamentosModalComponent,
    ListaIncapacidadesModalComponent,
    ListaExamenesModalComponent,
    AtendiendoPacienteComponent,
    PacientesPrincipalComponent,
    PacientesNuevoEditarComponent,
    PacientesPerfilComponent,
    PacientesListaMedicamentosComponent,
    PacientesListaExamenesComponent,
    PacientesHistoriaClinicaComponent,
    MedicamentosPrincipalComponent,
    MedicamentosNuevoEditarModalComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }

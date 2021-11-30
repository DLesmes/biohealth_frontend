import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './components/listar-medicos/listar-medicos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearMedicoComponent } from './components/crear-medico/crear-medico.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'medicos', component: ListarMedicosComponent},
  {path:'perfil', component:PerfilComponent },
  {path:'contacto', component: ContactoComponent},
  {path:'citas', component:ListarCitasComponent},
  {path:'crear-medico', component:CrearMedicoComponent},
  {path:'editar-perfil', component:EditarPerfilComponent},
  {path:'error', component:ErrorComponent},
  {path:'crear-cita', component:CrearCitaComponent},
  {path:'', component:LoginComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

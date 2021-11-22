import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarMedicosComponent } from './components/listar-medicos/listar-medicos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearMedicoComponent } from './components/crear-medico/crear-medico.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarMedicosComponent,
    NotFoundComponent,
    ContactoComponent,
    ListarCitasComponent,
    CrearMedicoComponent,
    PerfilComponent,
    EditarPerfilComponent,
    CrearCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';

const routes: Routes =  [
  { path: '', component: ListarPersonasComponent },
  { path: 'persona', component: CrearPersonaComponent },
  { path: 'persona/:id', component: CrearPersonaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

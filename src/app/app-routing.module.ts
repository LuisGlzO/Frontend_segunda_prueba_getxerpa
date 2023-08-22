import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrearCategoriaComponent } from './home/crear-categoria/crear-categoria.component';

const routes: Routes = [
  { path: '', component:HomeComponent, children:[
    { path: 'crear-categoria', component: CrearCategoriaComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

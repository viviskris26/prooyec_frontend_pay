import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CategoriaComponent } from './modulos/categoria/categoria.component';
import { EmpleadosComponent } from './modulos/empleados/empleados.component';
import { AdministradorComponent } from './modulos/administrador/administrador.component';
import { AplicacionComponent } from './modulos/aplicacion/aplicacion.component';
import { BaseDeDatosComponent } from './modulos/base-de-datos/base-de-datos.component';


const routes: Routes = [
  
  {
    path: '', component: PrincipalComponent,
    children:
    [{path: 'Dashboard' , component: DashboardComponent},
     {path: 'Categoria' , component: CategoriaComponent},
     {path: 'Empleados' , component: EmpleadosComponent},
     {path: 'Administrador' , component: AdministradorComponent},
     {path: 'Aplicacion' , component: AplicacionComponent},
     {path: 'Base de Datos' , component: BaseDeDatosComponent},

     {path: '', redirectTo: 'Dashboard', pathMatch: 'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

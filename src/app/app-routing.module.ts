import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'acercade',component: AcercadeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

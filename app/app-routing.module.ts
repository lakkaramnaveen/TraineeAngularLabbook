import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtraineeComponent } from './addtrainee/addtrainee.component';
import { ViewtraineeComponent } from './viewtrainee/viewtrainee.component';
import { SearchtraineeComponent } from './searchtrainee/searchtrainee.component';



const routes: Routes = [
  { path  : 'add',
    component : AddtraineeComponent
  },
  {
    path : 'view',
    component : ViewtraineeComponent
  },
  {
    path : 'search',
    component : SearchtraineeComponent
  },
  {
    path : '',
    redirectTo : '/view',
    pathMatch : 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

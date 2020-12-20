import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanosComponent} from '../app/romanos/romanos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/romanos',
    pathMatch:'full'
  },
  {
    path:'romanos',
    component:RomanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

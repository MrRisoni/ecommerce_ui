import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'product',
  component: ProductComponent
},
  {
    path: '',
    component: DashboardComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

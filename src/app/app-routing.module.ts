import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RulesPayRestrictComponent} from './rules-pay-restrict/rules-pay-restrict.component';
import {RulesCreatorComponent} from './rules-creator/rules-creator.component';

const routes: Routes = [{
  path: 'product',
  component: ProductComponent
},
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'rules/list',
    component: RulesPayRestrictComponent
  },
  {
    path: 'rules/new',
    component: RulesCreatorComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

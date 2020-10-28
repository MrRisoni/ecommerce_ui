import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RulesPayRestrictComponent } from './rules-pay-restrict/rules-pay-restrict.component';
import { RulesCreatorComponent } from './rules-creator/rules-creator.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BrowseComponent } from './browse/browse.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductIconsViewComponent } from './product-icons-view/product-icons-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SidebarComponent,
    DashboardComponent,
    RulesPayRestrictComponent,
    RulesCreatorComponent,
    OrderDetailsComponent,
    BrowseComponent,
    FiltersComponent,
    ProductIconsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SalesComponent } from './menu-bar/sales/sales.component';
import { FinanceComponent } from './menu-bar/finance/finance.component';
import { PieComponent } from './d3Charts/pie/pie.component';
import { BarComponent } from './d3Charts/bar/bar.component';
import { ScatterComponent } from './d3Charts/scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SalesComponent,
    FinanceComponent,
    PieComponent,
    BarComponent,
    ScatterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

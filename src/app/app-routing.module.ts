import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SalesComponent} from './menu-bar/sales/sales.component';
import {FinanceComponent} from './menu-bar/finance/finance.component';


const routes: Routes = [
  {path: '', component: SalesComponent},
  {path: 'finance', component: FinanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

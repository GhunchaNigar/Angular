import { Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { SalesComponent } from './sales/sales.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';
import { LedgerComponent } from './ledger/ledger.component';
import {DuesComponent } from './dues/dues.component';
import {PartnersProfitComponent } from './partners-profit/partners-profit.component';
import {PartnersComponent } from './partners/partners.component';
import { UsersComponent} from './users/users.component';
import { ManageComponent} from './manage/manage.component'

export const routes: Routes = [
  { path: 'ForgetPassword', component: ForgetpassComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Products-details', component: ProductDetailsComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Sales', component: SalesComponent },
  { path: 'Expenses', component: ExpensesComponent },
  { path: 'Stock', component: StockComponent },
  { path: 'Report', component: ReportComponent },
  { path: 'Ledger', component: LedgerComponent },
  { path: 'Dues', component: DuesComponent },
  { path: 'Partners-Profit', component: PartnersProfitComponent},
  { path: 'Partners', component: PartnersComponent},
  { path: 'Users', component: UsersComponent},
  { path: 'Manage', component: ManageComponent},

];

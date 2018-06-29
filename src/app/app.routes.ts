import { Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';

export const ROUTES: Routes = [
    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer', component: EditCustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

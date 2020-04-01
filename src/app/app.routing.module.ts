
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetailListComponent } from './employee-detail/employee-detail-list/employee-detail-list.component';



const routes: Routes = [
    { path: '', redirectTo: '/employeeList', pathMatch: 'full' },
    { path: 'employeeList', component: EmployeeDetailListComponent },
    { path: 'employeeDetail', component: EmployeeDetailComponent },
    { path: 'employeeDetail/:id', component: EmployeeDetailComponent }
    , {
        path: 'contactUs',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
    }
  //{ path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

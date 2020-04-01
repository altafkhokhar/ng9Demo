
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetailListComponent } from './employee-detail/employee-detail-list/employee-detail-list.component';
//simport { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/employeeList', pathMatch: 'full' },
    { path: 'employeeList', component: EmployeeDetailListComponent },
    { path: 'employeeDetail', component: EmployeeDetailComponent },
    { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
    {
        path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
        //c  omponent: await import('./contact-us/contact-us.component')
    }


  //{ path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

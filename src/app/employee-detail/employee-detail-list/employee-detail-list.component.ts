
import { Component, OnInit } from '@angular/core';
import {EmployeeDetailService } from '../../shared/employee-detail.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail-list',
  templateUrl: './employee-detail-list.component.html',
  styles: []
})
export class EmployeeDetailListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'Delete'];

    constructor(public service: EmployeeDetailService, private router: Router) { }

    ngOnInit(): void {
        this.service.refreshList();

    }

    deleteEmployee(id: number): void {
        this.service.deleteEmployee(id);
    }
    goToDetail(id: number): void {
        this.router.navigateByUrl('/employeeDetail/'+ id);

       }
}


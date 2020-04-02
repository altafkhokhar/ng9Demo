import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { EmployeeDetailService } from '../shared/employee-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styles: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    
    employeeForm = this.fb.group({
        employee_name: ['', Validators.required],
        employee_salary: [''],
        employee_dob: ['', Validators.required]
    });
    constructor(private fb: FormBuilder, private service: EmployeeDetailService, public _activatedRoute: ActivatedRoute) {
        this.loadEmployee();
        }

    ngOnInit(): void {

    }

    loadEmployee() {
        this._activatedRoute.params.subscribe(
            params => {
                let id: number;
                id = params['id'];
                this.service.getEmployeeDetail(id)
                    .subscribe
                    (res => {
                        console.log(res);
                        this.employeeForm.patchValue(res);

                    });
            });
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        this.service.addEmployee(this.employeeForm.value);
    }
}

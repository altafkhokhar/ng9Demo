import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { EmployeeDetailService } from '../shared/employee-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styles: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

    employeeForm = this.fb.group({
        employee_Name: ['', Validators.required],
        employee_Salary: [''],
        employee_dob: ['', Validators.required]
    });
    constructor(private fb: FormBuilder, private service: EmployeeDetailService, private actRoute: ActivatedRoute) {
       
    }

  ngOnInit(): void {
  }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        this.service.addEmployee(this.employeeForm.value);
    }
}

import { EmployeeDetail, IEmployeeDetail } from './employee-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {iApiResult } from "../shared/iApiResult";

@Injectable({
  providedIn: 'root'
})

    
export class EmployeeDetailService {


    formData: EmployeeDetail;
    readonly rootURL = 'https://localhost:44312/';
    list: EmployeeDetail[];

   constructor(private http: HttpClient) { }

    refreshList() {
        
        this.http.get(this.rootURL + 'Employee/employees')
            .toPromise().then
            (res => {
                
                //this.result = res as EmployeeDetail[];
                this.list = res  as EmployeeDetail[];
                console.log(this.list);
            });
    }

    getEmployeeDetail(id: number) {
        
        return this.http.get(this.rootURL + 'Employee/detail/'+ id);
       
    }

    deleteEmployee(id: number) {
        this.http.delete(this.rootURL + '/delete/' + id).toPromise()
            .then(res => {
                
                this.refreshList();
            })
    }

    addEmployee(employee: IEmployeeDetail) {
        console.log(employee);  
        this.http.post(this.rootURL + '/create',employee).toPromise()
            .then(res => {
                      this.refreshList();
            })
    }

}




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

    result: iApiResult<EmployeeDetail[]>;
    employeeDetail: iApiResult<EmployeeDetail>;
    constructor(private http: HttpClient) { }

    refreshList() {
        
        this.http.get(this.rootURL + 'Employee/employees')
            .toPromise().then
            (res => {
                
                this.result = res as iApiResult<EmployeeDetail[]>;
                this.list = this.result;
                console.log(this.list);
            });
    }

    getEmployeeDetail(id: number) {
        
        return this.http.get(this.rootURL + 'Employee/detail/'+ id);
       //return  this.http.get(this.rootURL + '/employee/'+id)
       //     .subscribe
       //     (res => {
       //         console.log(res);
       //         this.employeeDetail = res as iApiResult<EmployeeDetail>;
       //         console.log(this.employeeDetail);
       //     });
    }

    deleteEmployee(id: number) {
        this.http.delete(this.rootURL + '/delete/' + id).toPromise()
            .then(res => {
                this.result = res as iApiResult<EmployeeDetail[]>;
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





//export class PaymentDetailService {
   

//    postPaymentDetail() {
//        return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
//    }
//    putPaymentDetail() {
//        return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
//    }
//    deletePaymentDetail(id) {
//        return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
//    }

    
//}

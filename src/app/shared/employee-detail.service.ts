import { EmployeeDetail, IEmployeeDetail } from './employee-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {iApiResult } from "../shared/iApiResult";

@Injectable({
  providedIn: 'root'
})

    
export class EmployeeDetailService {


    formData: EmployeeDetail;
    readonly rootURL = 'http://dummy.restapiexample.com/api/v1';
    list: EmployeeDetail[];

    result: iApiResult<EmployeeDetail[]>;
    constructor(private http: HttpClient) { }

    refreshList() {
        
        this.http.get(this.rootURL + '/employees')
            .toPromise().then
            (res => {
                
                this.result = res as iApiResult<EmployeeDetail[]>;
                console.log(this.result);
                this.list = this.result.data;
                console.log(this.list);
            });
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

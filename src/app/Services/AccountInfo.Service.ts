
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AccountInfo } from '../models/accountinfo';

import { throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AccountInfoService {


    constructor(private httpClient: HttpClient, private http: HttpClient) { }

    public getAllAccountInfo() {

        var accounts: AccountInfo[]; 

        return this.httpClient.get('localhost:44357/api/AccountInfo/GetAccounts').pipe(catchError(this.handleError));

        //return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').pipe(catchError(this.handleError));
        
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}

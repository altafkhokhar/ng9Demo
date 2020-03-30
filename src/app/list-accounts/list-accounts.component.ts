import { Component, OnInit } from '@angular/core';

import { AccountInfoService } from '../Services/AccountInfo.Service';



export interface AccountInfo {
    id: number;
    name: string;
    balance: number;
}

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent  {

    public accounts: any; 
    constructor(private accountInfoService: AccountInfoService) {
        
    }

    ngOnInit(): void {

        this.accountInfoService.getAllAccountInfo().subscribe(accountsData => {
            this.accounts = accountsData;
        })
    }
}

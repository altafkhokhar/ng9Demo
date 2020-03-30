import { Component } from '@angular/core';
import { EmployeeDetailService } from './shared/employee-detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AccountManagementWebApp';
    

    constructor(private service: EmployeeDetailService, public _router: Router) {

    } 

    addEmployee(): void {
        this.service.addEmployee(null);
    }

    
}

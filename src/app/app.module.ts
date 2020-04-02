

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { EmployeeDetailService } from './shared/employee-detail.service';
import { AppRoutingModule } from './app.routing.module';

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';


import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetailListComponent } from './employee-detail/employee-detail-list/employee-detail-list.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';;


@NgModule({
  declarations: [
    AppComponent,ToolBarComponent,
        FooterBarComponent,
        EmployeeDetailComponent,
        EmployeeDetailListComponent
        
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      MatListModule,
      MatTableModule,
      MatIconModule,
      MatSlideToggleModule,
      AppRoutingModule
  ],
    providers: [EmployeeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialImportsModule } from './material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component'
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './reports/report.component'
import { ReportsService } from './reports/services/reports.service';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule, 
    BrowserAnimationsModule, 
    MaterialImportsModule,
    AppRoutingModule,
    FlexLayoutModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ReportsComponent, 
    ReportComponent
    ],
  providers: [ ReportsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

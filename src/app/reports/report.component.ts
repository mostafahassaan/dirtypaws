import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Report } from './models/report.model'; 
import { ReportsService } from './services/reports.service';

@Component({
  selector: 'report-component',
  templateUrl: './views/report.html'
})
export class ReportComponent implements OnInit{

  report: Report;

  constructor(
    private reportsService: ReportsService, 
    private route: ActivatedRoute, 
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.reportsService.getReport(+params['id']))
      .subscribe(report => this.report = report);     
  }

  goBack(): void {
    this.location.back();
  }
}
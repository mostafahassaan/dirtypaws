import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from './models/report.model';
import { ReportsService } from './services/reports.service';


@Component({
    selector: 'reports-component', 
    templateUrl: './views/reports.html', 
    providers: [ReportsService]
}) 
export class ReportsComponent implements OnInit{
  reports: Report [];
  
  
  constructor(
    private reportService: ReportsService, 
    private router: Router
  ){}

  getReports(): void{
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
      console.log(JSON.stringify(this.reports));
    });
  }

  ngOnInit(): void{
    this.getReports();
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; };

    this.reportService.createReport(name)
      .then(report => {
        this.reports.push(report);    
      })
  }

  gotoDetail(report: Report): void{
    this.router.navigate(['/reports', report.id]);
  }
}
import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportsService {

    // private reportsUrl = 'api/reports';
    private headers = new Headers({'Content-Type': 'application/json'})

    private reportsUrl = 'http://www.mocky.io/v2/5941033a0f00002107c62feb';
    constructor(private http: Http){}
    
    getReports(): Observable<Report[]> {
        return this.http.get(this.reportsUrl)
            .map(obs => obs.json().data as Report[]);
            // .catch(this.handleError);
    }

    getReport(id: number): Observable <Report> {
        let reportsUrl: string = this.reportsUrl + '/' + id.toString();  
        return this.http.get(reportsUrl)
            .map(res => res.json().data as Report)
            .catch(this.handleError);
    }

    createReport(name: string): Promise<Report> {
        return this.http
            .post(this.reportsUrl, JSON.stringify({animalName: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Report)
            .catch(this.handleError);
    }

    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    


}
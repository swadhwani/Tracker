import { Injectable } from '@angular/core';
import { Project } from '../../shared/project';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  constructor(public http: Http, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello ProjectProvider Provider');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get(baseURL + 'projects')
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getTicketById(id: number): Observable<Project> {
    return  this.http.get(baseURL + 'projects/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}

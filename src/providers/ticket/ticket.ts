import { Injectable } from '@angular/core';
import { Ticket } from '../../shared/ticket';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  constructor(public http: Http, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello TicketProvider Provider');
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get(baseURL + 'tickets')
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getTicketById(id: number): Observable<Ticket> {
    return  this.http.get(baseURL + 'tickets/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ticket } from '../../shared/ticket';
import { TicketProvider } from '../../providers/ticket/ticket';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  tickets: Ticket[];
  errMess: string;

  constructor(public navCtrl: NavController, private ticketService: TicketProvider, @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(){
    this.ticketService.getTickets()
    .subscribe(tickets => this.tickets = tickets, 
    errmess => this.errMess = <any>errmess);
  }
 
}

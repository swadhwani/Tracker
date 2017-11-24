import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the CreateTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-ticket',
  templateUrl: 'create-ticket.html',
})

export class CreateTicketPage {

  addTicket: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private formBuilder: FormBuilder) {
      this.addTicket = this.formBuilder.group({
        project: ['', Validators.required],
        assignedTo:['', Validators.required],
        category:[''],
        priority:['Low', Validators.required], 
        shortDesc:['', Validators.required], 
        status:['New', Validators.required], 
        comments:['']
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTicketPage');
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { User } from '../../shared/user';
import { UserProvider } from '../../providers/user/user';
import {Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage implements OnInit {

  users: User[];
  errMess: string;
  addUser: FormGroup;

  constructor(public navCtrl: NavController, private userService: UserProvider, @Inject('BaseURL') private BaseURL, public viewCtrl: ViewController, 
              private formBuilder: FormBuilder) {
    this.addUser = this.formBuilder.group({
      username:['', Validators.required], 
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      firstname:['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      lastname:['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      email:['', [Validators.required, Validators.email]], 
      projects: new FormArray([new FormControl(null)])

    });
  }

 ngOnInit(){
  this.userService.getUsers()
  .subscribe(users=> this.users = users, 
  errmess => this.errMess = <any>errmess);
 }

 onAddSpecialRequest () {
  this.addUser.controls
  .specialRequests.push(new FormControl(null));
}

onRemoveSpecialRequest (index) {
  this.addUser.controls['specialRequests'].removeAt(index);
}
}

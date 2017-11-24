import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Project } from '../../shared/project';
import { ProjectProvider } from '../../providers/project/project';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage implements OnInit {
  projects:Project[];
  errMess: string;
  constructor(public navCtrl: NavController, private projectService: ProjectProvider, @Inject('BaseURL') private BaseURL) {
  }

 ngOnInit() {
  this.projectService.getProjects()
  .subscribe(projects=> this.projects = projects, 
    errmess => this.errMess = <any>errmess);
 }

}

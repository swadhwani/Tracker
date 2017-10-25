import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateTicketPage } from '../pages/create-ticket/create-ticket';
import { AddUserPage } from '../pages/add-user/add-user';
import { AddProjectPage } from '../pages/add-project/add-project';
import { UserSettingsPage } from '../pages/user-settings/user-settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TicketProvider } from '../providers/ticket/ticket';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';

import { baseURL } from '../shared/baseurl';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateTicketPage, 
    AddProjectPage, 
    AddUserPage,
    UserSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateTicketPage, 
    AddUserPage, 
    AddProjectPage, 
    UserSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TicketProvider,
    ProcessHttpmsgProvider, 
    { provide: 'BaseURL', useValue: baseURL }
  ]
})
export class AppModule {}

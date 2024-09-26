import { Injectable } from '@angular/core';
import {Email} from "../interfaces/email";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emails: Email[] = [
    { id: 1 ,from: 'sender@mail.com', to: 'receiver@mail.com', subject: 'first email', body: 'Email message body'},
    { id: 2 ,from: 'sender@mail.com', to: 'receiver@mail.com', subject: 'second email'},
    { id: 3 ,from: 'sender@mail.com', to: 'receiver@mail.com', subject: 'third email', body: 'Email '},
    { id: 4 ,from: 'sender@mail.com', to: 'receiver@mail.com', subject: 'fourth email'}

  ]
  constructor() { }

  getEmails(){
    return this.emails;
  }

  getEmailById(id: number):Email|undefined {
   return this.emails.find((email) => email.id === id);
  }

  addEmail(email:Email):void{
    if(!(email.id)){
      email.id = this.emails.length + 1;
    }
    this.emails.push(email);
  }

  deleteEmail(id:number):void{
    let index:number = this.emails.map( email => email.id).indexOf(id);
    this.emails.splice(index, 1);
  }

  deleteAllEmails():void{
    this.emails = [];
  }



}

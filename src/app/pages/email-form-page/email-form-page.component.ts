import {NgIf} from "@angular/common";
import { Component } from '@angular/core';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {EmailReaderFormComponent} from "../../components/email-reader-form/email-reader-form.component";
import {Email} from "../../interfaces/email";
import {FormLog} from "../../interfaces/formLog.interface";
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-email-form-page',
  standalone: true,
  imports: [
    EmailReaderFormComponent,
    NgIf,
    NgbAlert
  ],
  templateUrl: './email-form-page.component.html',
  styleUrl: './email-form-page.component.css'
})
export class EmailFormPageComponent {
  tmpMessage: Email = {}
  displayAlert:boolean = false;
  public style: object = {};

  constructor(private emailService: EmailService) {
  }

  sendEmail(email: Email):void {
    this.tmpMessage = {...email};
    this.displayAlert = true;
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.displayAlert = false;
      this.tmpMessage = {};
    }, 3000);

    this.emailService.addEmail({...email})
  }

  loadEmailForm(formLogTrace: FormLog){
    //console.log(formLogTrace);
  }
}

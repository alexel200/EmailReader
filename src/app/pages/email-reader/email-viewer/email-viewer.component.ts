import {Location, NgIf} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {EmailReaderFormComponent} from "../../../components/email-reader-form/email-reader-form.component";
import {HighlightDirective} from "../../../directives/highlight.directive";
import {Email} from "../../../interfaces/email";
import {EmailService} from "../../../services/email.service";

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [
    FormsModule,
    HighlightDirective,
    EmailReaderFormComponent,
    NgIf,
    NgbAlert
  ],
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.css'
})
export class EmailViewerComponent implements OnInit{
  email:Email = {};
  id: number = 0;
  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    public location: Location,
    ) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let email = this.emailService.getEmailById(parseInt(params.get('emailId')!));
      if(email){
        this.email = email;
      }
    });


  }

}

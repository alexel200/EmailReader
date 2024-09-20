import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {ResizableModule, ResizeEvent} from "angular-resizable-element";
import {EmailReaderFormComponent} from "../../components/email-reader-form/email-reader-form.component";
import {LogTraceCardComponent} from "../../components/log-trace-card/log-trace-card.component";
import {UpToDateComponent} from "../../components/up-to-date/up-to-date.component";
import {Email} from "../../interfaces/email";
import {FormLog} from "../../interfaces/formLog.interface";

@Component({
  selector: 'app-email-reader-basic',
  standalone: true,
  imports: [
    UpToDateComponent,
    JsonPipe,
    FormsModule,
    ResizableModule,
    EmailReaderFormComponent,
    NgIf,
    LogTraceCardComponent,
    NgForOf,
    NgbAlert,
    NgStyle
  ],
  templateUrl: './email-reader-basic.component.html',
  styleUrl: './email-reader-basic.component.css'
})
export class EmailReaderBasicComponent{
  emails: Email[] = []
  formLogTrace = signal<FormLog>({form:{}, fields: []});
  tmpMessage: Email = {}
  displayAlert:boolean = false;
  public style: object = {};

  onResizeEnd(event: ResizeEvent) {
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  sendEmail(email: Email):void {
    this.tmpMessage = {...email};
    this.displayAlert = true;
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.displayAlert = false;
      this.tmpMessage = {};
    }, 3000);
    this.emails.push({...email});
  }

  loadEmailForm(formLogTrace: FormLog){
    this.formLogTrace.update( () => formLogTrace );
  }

}

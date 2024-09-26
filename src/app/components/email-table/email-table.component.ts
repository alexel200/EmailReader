import {NgForOf} from "@angular/common";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {Email} from "../../interfaces/email";
import {EmailFilterPipe} from "../../pipes/email-filter.pipe";
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-email-table',
  standalone: true,
  imports: [
    EmailFilterPipe,
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './email-table.component.html',
  styleUrl: './email-table.component.css'
})
export class EmailTableComponent {
  @Input({required: true}) emails: Email[] = [];
  @Input({required: true}) emailFilterValue!: string;
  @Input({required: true}) emailSearchText!: string;

  @Output() viewEmailEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private emailService: EmailService,) {
  }

  deleteEmail(id: number|undefined) {
    if(id)
      this.emailService.deleteEmail(id);
  }

  viewEmail(id: number|undefined) {
    if(id)
      this.viewEmailEmitter.emit(id)
  }

    protected readonly faEnvelopeOpen = faEnvelopeOpen;
    protected readonly faTrashCan = faTrashCan;
}

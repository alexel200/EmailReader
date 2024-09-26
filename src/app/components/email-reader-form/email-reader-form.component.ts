import {JsonPipe, Location, NgClass} from "@angular/common";
import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightDirective} from "../../directives/highlight.directive";
import {Email} from "../../interfaces/email";
import {Field, FormLog, FormStatus} from "../../interfaces/formLog.interface";

@Component({
  selector: 'app-email-reader-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
    NgClass,
    HighlightDirective
  ],
  templateUrl: './email-reader-form.component.html',
  styleUrl: './email-reader-form.component.css'
})
export class EmailReaderFormComponent implements AfterViewInit{
  @ViewChild('emailForm') emailForm!:any;
  @Input() formType: string = '';
  @Output() emitEmail: EventEmitter<Email> = new EventEmitter<Email>();
  @Output() emitEmailForm: EventEmitter<FormLog> = new EventEmitter<FormLog>();
  email: Email = {};
  formStatusTrace: FormLog = {form: {}, fields:[]};

  constructor(private location: Location) {
  }

  clearEmail() {
    this.emailForm.reset();
  }

  sendEmail() {
    this.emitEmail.emit(this.email);
    this.emailForm.reset();
    if(this.formType == 'list'){
      this.location.back();
    }
  }

  ngAfterViewInit() {
    this.emailForm.valueChanges.subscribe(() => {
      this.formStatusTrace.form = {
        isValid: this.emailForm.valid,
        isDirty: this.emailForm.dirty,
        isTouched: this.emailForm.touched
      }

      let fields: Field[] = [];

      for(let control in this.emailForm.controls){
        let field: Field = {}
        let errors = {}

        let status: FormStatus = {
          isValid: this.emailForm.form.get(control).valid,
          isTouched: this.emailForm.form.get(control).touched,
          isDirty: this.emailForm.form.get(control).dirty,
        }
        if(this.emailForm.controls[control].errors) {
          if (this.emailForm.controls[control].errors.hasOwnProperty('required')) {
            errors = {required: this.emailForm.controls[control].errors['required']};
          }

          if (this.emailForm.controls[control].errors['pattern']) {
            errors = {pattern: this.emailForm.controls[control].errors['pattern']};
          }

          if (this.emailForm.controls[control].errors['minlength']) {
            errors = {minlength: this.emailForm.controls[control].errors['minlength']};
          }
        }

        field.name = control;
        field.status = status;
        field.errors = errors;
        fields.push(field);
      }

      this.formStatusTrace.fields = fields;
      this.emitEmailForm.emit(this.formStatusTrace);
    });

  }
}

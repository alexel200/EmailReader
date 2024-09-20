import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {ResizableModule} from "angular-resizable-element";
import {Email} from "../../interfaces/email";

@Component({
  selector: 'app-up-to-date',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    ResizableModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './up-to-date.component.html',
  styleUrl: './up-to-date.component.css'
})
export class UpToDateComponent{
 @Input({required: true}) emails:Email[] = [];
}

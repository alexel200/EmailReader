import {JsonPipe, NgIf, TitleCasePipe} from "@angular/common";
import {Component, Input} from '@angular/core';
import {Field} from "../../interfaces/formLog.interface";

@Component({
  selector: 'app-log-trace-card',
  standalone: true,
  imports: [
    JsonPipe,
    TitleCasePipe,
    NgIf
  ],
  templateUrl: './log-trace-card.component.html',
  styleUrl: './log-trace-card.component.css'
})
export class LogTraceCardComponent {
  @Input({required:true}) field: Field = {}

}

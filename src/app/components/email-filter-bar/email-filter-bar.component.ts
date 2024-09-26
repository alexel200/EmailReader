import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-email-filter-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './email-filter-bar.component.html',
  styleUrl: './email-filter-bar.component.css'
})
export class EmailFilterBarComponent{
  @Input({required: true}) emailFilter!: string;
  @Output() emailFilterEmitter = new EventEmitter<string>();
  updateFilter(event:any):void{
    this.emailFilter = event.target.value;
    this.emailFilterEmitter.emit(this.emailFilter);
  }
}

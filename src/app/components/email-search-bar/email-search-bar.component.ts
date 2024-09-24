import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

@Component({
  selector: 'app-email-search-bar',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule
  ],
  templateUrl: './email-search-bar.component.html',
  styleUrl: './email-search-bar.component.css'
})
export class EmailSearchBarComponent {
    @Input({required: true}) emailSearchText!: string;
    @Output() searchEmailEmitter: EventEmitter<string> = new EventEmitter<string>();

    protected readonly faSearch = faSearch;


  search() {
      this.searchEmailEmitter.emit(this.emailSearchText);
  }
}

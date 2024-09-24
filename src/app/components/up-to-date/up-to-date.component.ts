import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {Component, Input, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons/faAdd";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {ResizableModule} from "angular-resizable-element";
import Swal from "sweetalert2";
import {Email} from "../../interfaces/email";
import {EmailFilterPipe} from "../../pipes/email-filter.pipe";
import {EmailService} from "../../services/email.service";
import {StorageService} from "../../services/storage.service";
import {EmailFilterBarComponent} from "../email-filter-bar/email-filter-bar.component";
import {EmailListComponent} from "../email-list/email-list.component";
import {EmailSearchBarComponent} from "../email-search-bar/email-search-bar.component";
import {EmailTableComponent} from "../email-table/email-table.component";

@Component({
  selector: 'app-up-to-date',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    ResizableModule,
    NgIf,
    NgForOf,
    FaIconComponent,
    EmailSearchBarComponent,
    EmailFilterBarComponent,
    EmailFilterPipe,
    EmailTableComponent,
    EmailListComponent,
    NgClass,
  ],
  templateUrl: './up-to-date.component.html',
  styleUrl: './up-to-date.component.css'
})
export class UpToDateComponent implements OnInit {
  emails: Email[] = [];
  emailFilterValue: string = "all";
  emailSearchText: string = "";
  @Input({required:true}) emailPresentationType: string = "table";

  protected readonly faTrashCan = faTrashCan;
  protected readonly faAdd = faAdd;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private storageService: StorageService,) {
  }

  ngOnInit() {
    this.loadEmails();
    this.getFiltersAndSearchText();
  }

  protected readonly faSearch = faSearch;

  searchIntoEmail(emailSearchText: string) {
    this.emailSearchText = emailSearchText;
    this.saveFiltersAndSearchText();
  }

  updateFilter(value: string) {
    this.emailFilterValue = value;
    this.saveFiltersAndSearchText();
  }

  viewEmail(id: number) {
    this.router.navigate(['email', id]);
  }

  deleteEmails() {
    Swal.fire({
      title: "Delete All Emails",
      text: "You won't be able to revert this!, are you sure you want to delete all message?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: "#0033ab",
      confirmButtonColor: "#d33",
      cancelButtonText: `Cancel`,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        this.emails = [];
        this.emailService.deleteAllEmails();
      }
    });

  }

  addEmail() {
    this.router.navigate(['/email-form'])
  }

  loadEmails(){
    this.emails = this.emailService.getEmails();
  }

  saveFiltersAndSearchText(){
    this.storageService.save('filtersAndSearch', {filter: this.emailFilterValue, search: this.emailSearchText});
  }

  getFiltersAndSearchText(){
    let tmpFiltersAndSearch = JSON.parse(this.storageService.get('filtersAndSearch') || '{}') ;

    if(tmpFiltersAndSearch ){
      if(tmpFiltersAndSearch.filter)
        this.emailFilterValue = tmpFiltersAndSearch.filter;
      if(tmpFiltersAndSearch.search)
        this.emailSearchText = tmpFiltersAndSearch.search;
    }
  }
}

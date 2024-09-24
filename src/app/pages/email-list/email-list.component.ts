import { Component } from '@angular/core';
import {UpToDateComponent} from "../../components/up-to-date/up-to-date.component";

@Component({
  selector: 'app-email-list',
  standalone: true,
    imports: [
        UpToDateComponent
    ],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.css'
})
export class EmailListComponent {

}

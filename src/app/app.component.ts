import {NgClass} from "@angular/common";
import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmailReaderBasicComponent} from "./email-reader/pages/email-reader-basic/email-reader-basic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailReaderBasicComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isNavbarFixed: boolean = false;
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

}

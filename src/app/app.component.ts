import {NgClass} from "@angular/common";
import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {EmailReaderBasicComponent} from "./pages/email-reader/email-reader-basic/email-reader-basic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailReaderBasicComponent, NgClass, FontAwesomeModule, RouterLink, NgbCollapse, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isNavbarFixed: boolean = false;
  isMenuCollapsed = true;
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

}

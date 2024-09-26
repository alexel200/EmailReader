import { Routes } from '@angular/router';
import {EmailFormPageComponent} from "./pages/email-form-page/email-form-page.component";
import {EmailListComponent} from "./pages/email-list/email-list.component";
import {EmailReaderBasicComponent} from "./pages/email-reader/email-reader-basic/email-reader-basic.component";
import {EmailViewerComponent} from "./pages/email-reader/email-viewer/email-viewer.component";

export const routes: Routes = [
  {
    path: '',
    component: EmailReaderBasicComponent
  },
  {
    path: 'email-list',
    component: EmailListComponent
  },
  {
    path: 'email/:emailId',
    component: EmailViewerComponent
  },
  {
    path: 'email-form',
    component: EmailFormPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

import { Pipe, PipeTransform } from '@angular/core';
import {Email} from "../interfaces/email";

@Pipe({
  name: 'emailFilter',
  standalone: true
})
export class EmailFilterPipe implements PipeTransform {

  transform(emails: Email[], filter: string = 'all', search:string = ''): Email[] {
    let tableValues: Email[] = emails;
    if(search.trim().length > 0){
      tableValues = tableValues.filter(email => {
        return email.from?.toLowerCase().includes(search.toLowerCase()) ||
                email.to?.toLowerCase().includes(search.toLowerCase()) ||
                  email.subject?.toLowerCase().includes(search.toLowerCase()) ||
                    email.body?.toLowerCase().includes(search.toLowerCase());
      });
    }

    switch(filter){
      case 'with-body':
        tableValues = tableValues.filter(email => {
          if (email.body) {
            return email.body.trim().length > 0;
          }
          return false;
        });
        break;
      case 'without-body':
        tableValues = tableValues.filter( (email:Email) => !email.body);
        break;
      default:
    }

    return tableValues;
  }

}

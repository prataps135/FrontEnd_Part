import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: IUser[], filterIdType: string): IUser[] {
    if (filterIdType == '') {
      return value;
    } else {
      return filterIdType === 'odd' ?
        value.filter(user => user.id % 2 !== 0) :
        value.filter(user => user.id % 2 === 0);
    }

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(value: any, position: string, textToAppend: string): string {

    return position === 'pre' ? textToAppend + value : value + textToAppend;

    // let output = "mailto://" + value;
    // return output;
  }

}

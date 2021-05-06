import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'htmlReset'
})
export class HtmlResetPipe implements PipeTransform {

  constructor() {

  }

  transform(value) {
    return value.toString()
  }

}
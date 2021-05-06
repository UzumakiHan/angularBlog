import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HtmlResetPipe} from '../../../pipes/html-reset.pipe';

@NgModule({
  declarations: [ HtmlResetPipe],
  imports: [
    CommonModule
  ],
  exports: [ HtmlResetPipe]
})
export class CommonPipeModule {
}
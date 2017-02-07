import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LearnRxjsComponent } from './learn-rxjs.component';

@NgModule({
  declarations: [
    LearnRxjsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LearnRxjsComponent
  ],
  providers: []
})
export class LearnRxjsModule { }

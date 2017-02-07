import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OperatorsComponent } from './operators.component';

@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    OperatorsComponent
  ],
  providers: []
})
export class OperatorsModule { }

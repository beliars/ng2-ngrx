import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { LearnRxjsModule } from './components/learn-rxjs/learn-rxjs.module';
import { OperatorsModule } from './components/operators/operators.module';

import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    LearnRxjsModule,
    OperatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

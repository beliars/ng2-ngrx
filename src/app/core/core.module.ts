import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RestService } from '../services/rest.service';


import { RestangularModule } from 'ng2-restangular';
import 'rxjs/Rx';

export function restangular (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com/');
  RestangularProvider.setRestangularFields({
    id: "_id"
  });
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RestangularModule.forRoot(restangular),
  ],
  providers: [RestService],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';


import { RestangularModule } from 'ng2-restangular';
import 'rxjs/Rx';

export function restangular (RestangularProvider) {
  RestangularProvider.setBaseUrl('');
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
  providers: [],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
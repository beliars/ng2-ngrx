import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rxjs!';
  
  constructor() {
  }
  
  ngOnInit() {
    console.log('Init!');
  }
  
}



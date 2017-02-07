import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

@Component({
  selector: 'operators',
  templateUrl: 'operators.component.html',
  styleUrls: ['operators.component.scss']
})
export class OperatorsComponent {
  title = 'Operators';
  
  constructor() {
  }
  
  ngOnInit() {
    
    /* Concat */
    const getPostOne$ = Observable.timer(3000).mapTo({id: 1});
    const getPostTwo$ = Observable.timer(3000).mapTo({id: 2});
  
    Observable.concat(getPostOne$, getPostTwo$).subscribe(res => console.log(res));
  
    // Subscribe to Observables in order but only when the previous completes, let me know, then move to the next one.
  }
  
  ngAfterContentInit() {
    
  }
}



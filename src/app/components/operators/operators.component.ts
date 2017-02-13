import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { RestService } from '../../services/rest.service';

@Component({
  selector: 'operators',
  templateUrl: 'operators.component.html',
  styleUrls: ['operators.component.scss']
})
export class OperatorsComponent {
  title = 'Operators';
  private users;
  private websites;
  private subscribers;

  constructor(private restService: RestService) {
  }
  
  ngOnInit() {
    
    /* Concat */
    const getPostOne$ = Observable.timer(3000).mapTo({id: 1});
    const getPostTwo$ = Observable.timer(1000).mapTo({id: 2});
  
    Observable.concat(getPostOne$, getPostTwo$).subscribe(res => console.log(res));
  
    // Subscribe to Observables in order but only when the previous completes, let me know, then move to the next one.

    /* forkJoin */
    const getPostThree$ = Observable.timer(2000).mapTo({id: 3});
    const getPostFour$ = Observable.timer(1000).mapTo({id: 4});

    Observable.forkJoin(getPostOne$, getPostTwo$, getPostThree$, getPostFour$).subscribe(res => {
      console.log('After forkJoin result:');
      console.log(res);
    }); 

    /* MergeMap */

    const post$ = Observable.of({id: 1});
    const getPostInfo$ = Observable.timer(5000).mapTo({title: "Post title"});

    const posts$ = post$.mergeMap(post => getPostInfo$).subscribe(res => console.log(res));


    /* pairwise */

    Observable
      .fromEvent(document, 'scroll')
      .map(e => window.pageYOffset)
      .pairwise()
      .subscribe(pair => console.log(pair));

    
    /* 10 Need-to-Know RxJS Functions Examples */

    this.subscribers = this.restService.getUsersList()
      .map(users => {
        let website = users.map((item) => item.website)
        return website = website.filter((item) => (item.endsWith('net') || item.endsWith('org')));
      })
      .subscribe(websites => {
        this.websites = websites;
    });

    Observable.from([1, 2, 3, 4, 5, 5, 5, 6])
      .map(x => x * 2)
      .filter(x => x % 2 === 0)
      .reduce((a, b) => a + b)
      .subscribe(x => console.log(x),
      error => console.error(error),
      () => console.log('done'));

  }
  
  ngAfterContentInit() {
    
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe(); 
  }
}



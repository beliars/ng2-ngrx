import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private element: ElementRef) {
  }
  
  ngOnInit() {
    console.log('Init!');
  }
  
  ngAfterContentInit() {
    
    /* Observable */
    
    let test1 = document.querySelector('.test1');
    Observable.fromEvent(test1, 'click')
      .subscribe(() => console.log('Clicked!'));
  
    let test2 = document.querySelector('.test2');
    Observable.fromEvent(test2, 'click')
      .throttleTime(1000)
      .scan((count: number) => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
    
    let clickPos$ = Observable.fromEvent(document, 'click');
  
    clickPos$
      .map((event: MouseEvent) => {
        let coords = {
          x: event.clientX,
          y: event.clientY
        };
        return coords;
    })
      .subscribe(coords => {
        console.log(`clientX: ${coords.x}`);
        console.log(`clientY: ${coords.y}`);
      });
    
    let observable = Observable.create(function(observer) {
      observer.next(100);
      observer.next(200);
      observer.next(300);
      setTimeout(() => {
        observer.next(400);
        observer.complete();
      }, 2000);
    });
  
    console.log('just before subscribe');
    observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('completed')
    });
    console.log('just after subscribe');
    
    let tick$ = Observable.create((observer) => {
      let interval = setInterval(() => {
        observer.next('Tick 1 observer');
      }, 1000);
    });
    
    let subscription = tick$.subscribe((x) => console.log(x));
    
    let tick2$ = Observable.create((observer) => {
      let interval = setInterval(() => {
        observer.next('Tick 2 observer');
      }, 2000);
    });
    
    let childSubscription = tick2$.subscribe((x) => console.log(x));
    subscription.add(childSubscription);
  
    setTimeout(() => {
      subscription.unsubscribe();
    }, 10000);
  
    
    /* Operators */
    
    function multiplyByTen(input) {
      let output = Observable.create(function subscribe(observer) {
        input.subscribe({
          next: (v) => observer.next(10 * v),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      });
      return output;
    }
  
    let input = Observable.from([1, 2, 3, 4]);
    let output = multiplyByTen(input);
    output.subscribe(x => console.log(x));
  
  
    let test3 = document.querySelector('.test3');
    
    let click$ = Observable.fromEvent(test3, 'click');
    
    click$
      .delay(2000)
      .subscribe(() => console.log('Delayed click!'));
    
    let arr$ = Observable.of('foo', 'bar', 'text', 'title');
    
    arr$
      .subscribe(res => console.log(res));
    
    
    /* Controlling the flow */
    
    let test4 = document.querySelector('.test4');
    
    let input$ = Observable.fromEvent(test4, 'input');
    
    input$
      .filter((event: any) => event.target.value.length > 2)
      .take(3)
      .subscribe(value => console.log(value));
  
    let test6 = Observable.fromEvent(document.querySelector('.test6'), 'input');
    test6
      .map((event: any) => event.target.value.toUpperCase())
      .subscribe(res => console.log(res));
    
    let obj$ = Observable.from([
      {name: 'John', age: 30},
      {name: 'Sarah', age: 35},
      {name: 'Sarah', age: 35}
    ]);
    
    obj$
      .pluck('name')
      .distinct()
      .subscribe(res => console.log(res));
      
    
  }
}



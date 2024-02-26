import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  private counterSignal = signal(0);
  readonly counter = this.counterSignal.asReadonly();

  increment(){
  if(this.counter() > 50){
    throw 'Maximum value reached!';
  }
    this.counterSignal.update(val => val + 1)
  }

  constructor() { }
}

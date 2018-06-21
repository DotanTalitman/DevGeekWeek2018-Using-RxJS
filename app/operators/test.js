


import {interval,fromEvent, timer} from "rxjs"
import {take} from "rxjs/operators"

let startInterval = interval(1000).pipe(take(2));
let observable = timer(2000).pipe(x=>startInterval)
let source= fromEvent(document.querySelector("button"),"click")

let sub=observable.subscribe(num=>console.log(num))

source.subscribe(()=>sub.unsubscribe())
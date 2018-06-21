import {interval,fromEvent, timer} from "rxjs"
import {take} from "rxjs/operators"


let observable = timer(2000,5000)


let sub=observable.subscribe(num=>console.log("start..."))


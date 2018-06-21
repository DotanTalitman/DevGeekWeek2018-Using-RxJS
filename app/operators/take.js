import {interval,} from "rxjs"
import {take} from "rxjs/operators"

let observable = interval(1000).pipe(take(2));


observable.subscribe(num=>console.log(num))


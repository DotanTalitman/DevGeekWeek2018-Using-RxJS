
import {interval} from "rxjs"

let observable = interval(1000);


observable.subscribe(num=>console.log(num))
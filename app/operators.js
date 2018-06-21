import {Observable,interval,timer,range} from "rxjs"
import {share,publish,map,reduce,startWith} from 'rxjs/operators' 

//var observable = interval(1000).pipe(publish())
let start=10;
var observable =   interval(1000).pipe(map(i=>start-i));


function subscribe(){

   let subscription1=observable.subscribe((number) => {
      //  if (number ==0) subscription1.unsubscribe();
        this.innerHTML=`<b>${number}</b>`
    })
}

window.onload=function(){
    document.querySelector("#timer1").addEventListener("click",subscribe)
    //observable.connect();
    document.querySelector("#timer2").addEventListener("click",subscribe)
}
import { Observable} from "rxjs"

import {map,take,interval,share} from 'rxjs/operators'
import 'rxjs/add/operator/map';

// let createMenuObservable = Observable.create((observer)=>{ 
//     let liContent1 ="Home"
//     let liContent2 ="About"
//     let liContent3 ="Contact Us"
//     if(liContent1!="Home"){
//         observer.error("first value must to be Home")
//     }
//     observer.next(liContent1)
//     observer.next(liContent2)
//     observer.next(liContent3)
//     observer.complete()
//     observer.next("more???    nop!")
// })
// createMenuObservable.subscribe(
//     (val)=>addMenuItem(val),
//     (err)=> console.log("error",err),
//     ()=> console.log("complete")
// )
// function addMenuItem (val){
//     let li = document.createElement("li");
//     li.innerHTML=val;
//     document.querySelector("#menu").appendChild(li);
// }
class Producer {
    constructor(){
      this.counter = 10
    }

    nextValue(){
      return this.counter--;
    }
 }


 let producer = new Producer();
let observable = Observable.create((observer) => {
   // let counter = 10;
    let id = setInterval(() => {
        observer.next(producer.nextValue())
    }, 1000)
    return () => {
        clearInterval(id)
    }
})




// let subscription=observable.subscribe((number) => {
//     if (number == 0) subscription.unsubscribe();
//      document.body.innerHTML = number
// })

function subscribe(){

    let subscription1=observable.subscribe((number) => {
        if (number ==0) subscription1.unsubscribe();
        this.innerHTML=`<b>${number}</b>`
    })
}

window.onload=function(){
    document.querySelector("#timer1").addEventListener("click",subscribe)
    document.querySelector("#timer2").addEventListener("click",subscribe)
}





//observable.map(number=>number*2).subscribe( number=> document.body.innerHTML = number)
//observable.pipe(map(number=>number*2)).subscribe(number=>  document.body.innerHTML = number)

// setTimeout((
// )=>{
//     observable.subscribe((number) => console.log(number))
// },5000)
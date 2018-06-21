import {
    Subject,
    BehaviorSubject,
    fromEvent
} from "rxjs"
import {
    publish
} from "rxjs/operators"

import {
    ajax
} from 'rxjs/ajax';
let subject = new BehaviorSubject();


let nameInput = document.querySelector("#nameInput")
let inputSource = fromEvent(nameInput, "input")
let sendDataBtn = document.querySelector("#sendDataBtn");
let btnSource = fromEvent(sendDataBtn, "click");

const apiData = ajax('http://localhost:3000/api/getData');
const githubUrl="https://api.github.com/users/dotanTalitman";
const githubApi=ajax(githubUrl);
//subject.subscribe(name => document.querySelector("#input1").value = name)
//var published = subject.pipe(publish());
btnSource.subscribe(getData)

function getData() {
    githubApi.subscribe(data => {
        console.log(data)
       // let name = data.response.name;
        //subject.next(name)
    })
}


    
    //subject.subscribe(x=> alert(x),5000 )
   // published.connect();

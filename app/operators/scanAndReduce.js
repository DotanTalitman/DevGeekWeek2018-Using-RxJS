import {of,interval} from "rxjs"
import {map,scan,reduce} from "rxjs/operators"


let observable = of("hello","world","1",2,false,"3")
let reduceObseravble = reduce((sum,nextValue)=>nextValue+sum,"")
let scanObseravble = reduce((sum,nextValue)=>nextValue+sum,"")
let obs =observable.pipe(scanObseravble);
obs
.subscribe(x=>console.log(x))




const subject = new Subject();
//scan example building an object over time
const example = subject.pipe(
  scan((acc, curr) => Object.assign({}, acc, curr), {})
);
//log accumulated values
const subscribe = example.subscribe(val =>
  console.log('Accumulated object:', val)
);
//next values into subject, adding properties to object
// {name: 'Joe'}
subject.next({ name: 'Joe' });
// {name: 'Joe', age: 30}
subject.next({ age: 30 });
// {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
subject.next({ favoriteLanguage: 'JavaScript' });
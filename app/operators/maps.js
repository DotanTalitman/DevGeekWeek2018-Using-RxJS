import { of ,
    interval
} from "rxjs"
import {
    ajax
} from "rxjs/ajax"
import {
    map,
    filter,
     merge,
    mergeMap,
    switchMap,
    mapTo
} from "rxjs/operators"

//const githubUrl = "https://api.github.com/search/users?q=";
const githubUrl = "https://api.github.com/users/";
function getGithubByName(name) {

    return ajax(githubUrl + name)
}

// let observable = getGithubByName("dotan")
//     .pipe(
//         map(x => x.response.items
//             .filter(item => item.score > 70)))


// let observable = getGithubByName("dotan")
//     .pipe(
//         mergeMap(
//             x =>
//             x.response.items.filter(
//                 item =>
//                 item.score > 70)))

// observable.subscribe(x => {
//     console.log("data ", x)
// })
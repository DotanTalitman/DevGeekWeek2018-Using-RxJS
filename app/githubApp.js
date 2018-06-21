import { of ,
    from,
    empty,
    interval,
    throwError
} from "rxjs"
import {
    ajax
} from "rxjs/ajax"
import {
    map,
    concatMap,
    catchError,
    switchMap,
    mergeMap
    
} from "rxjs/operators"

const GITHUB_USERS = "https://api.github.com/users/"

class GithubAPi {

    getDetailsByName(name) {
        let url = GITHUB_USERS + name;
        return ajax.get(url);
    }

    getDetailsByNameList(names) {

        let namesSource = from(names);
        return namesSource
            .pipe(
                concatMap(name => this.getDetailsByName(name)
                    .pipe(catchError(err =>
                        of (err)))),
            )


    }



}
// var source = from([1, 2, 3, 4])
// source.pipe(switchMap((n) => of (n)))
//.subscribe(x=>console.log(x))

let api = new GithubAPi();
//api.getDetailsByName("dotanTalitman").subscribe(data=>console.log(data.response))
let observable = api.getDetailsByNameList(["dotanTalitman", "dofdgdfgdfgfdgdft", "dotan"])
observable.subscribe(x => console.log(x.response))
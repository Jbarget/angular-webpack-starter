import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BugsService {
  private issueApi: string = 'https://repairly-issue-tracker.herokuapp.com/issues';
  constructor(private http: Http) {}
  //
  // getBugs(): Observable<{}> {
  //   return Observable.create((observer: any) => {
  //     setTimeout(() => {
  //       observer.complete({
  //         open: {number: 10},
  //         new: {number: 5},
  //         stale: {number:  3}
  //       })
  //     }, 3000)
  //   });
  // }

  getBugs(): Observable<any> {
    return this.http.get(this.issueApi, {headers: this.getHeaders()})
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
}

  private getHeaders(){
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}
}

import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BugsService {
  private trelloUrl: string = 'https://api.github.com/users/jbarget';
  constructor(private http: Http) {}

  getBugs(): Observable<any> {
    return this.http.get(this.trelloUrl, {headers: this.getHeaders()})
      .map(this.extractData);
  }

  private extractData(res: Response) {
    console.log(res)
  let body = res.json();
  return body || { };
}

  private getHeaders(){
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}
}

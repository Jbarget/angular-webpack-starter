import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BugsService {
  private trelloUrl: string = 'https://api.github.com/users/jbarget';
  constructor(private http: Http) {}

  getBugs(): Observable<any> {
    return this.http.get(this.trelloUrl)
      .map((res) => console.log(res));
  }
}

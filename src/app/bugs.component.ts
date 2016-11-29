import { Component, Pipe, PipeTransform } from '@angular/core';
import { BugsService } from './bugs.service';

@Component({
  selector: 'bugs',
  providers: [BugsService],
  styles: [`
    .bugs-count {
    display: flex;
    align-items: center;
    height: 3em;
    }
  `],
  template: `
    <div class="bugs-container">
      <div *ngFor="let key of keys">
        <p class='bugs-count'>{{bugs[key].count}}</p>
        <img src='http://images.fandango.com/redesign/areas/registration/img/worry-free-tickets-oj.svg'>
      </div>
    </div>`
})
export class BugsComponent {
  bugs: {} = {};
  errorMessage = '';
  keys = [''];

  constructor(private bugsService : BugsService) {
    this.parseData = this.parseData.bind(this);
    this.getData = this.getData.bind(this);
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    const rawBugs = this.bugsService.getBugs()
      .subscribe(
        this.parseData,
        (error: {}) => console.log(error)
      );
  }

  parseData(rawBugs: {}) {
    this.keys = Object.keys(rawBugs)
    console.log('>>>>>', rawBugs, this.keys);
    return this.bugs = rawBugs;
  }

}

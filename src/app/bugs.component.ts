import { Component } from '@angular/core';
import { BugsService } from './bugs.service';

@Component({
  selector: 'bugs',
  providers: [BugsService],
  template: `
    <div class='bugs-container'>
      <img *ngIf="bugs" [src]='bugs.avatar_url'>
      <p *ngIf="bugs">
        Oh look! There's {{bugs.name}}!
      </p>
    </div>`,
})
export class BugsComponent {
  bugs: {};
  errorMessage: string;

  constructor(private bugsService : BugsService) {}

  ngOnInit() {
    this.bugsService.getBugs()
      .subscribe(
        (bugs) => this.bugs = bugs,
        (error) =>  this.errorMessage = <any>error
      );
  }

}

import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <main>
      <h1>Hello from Angular App with Webpack</h1>
      <img src="../../public/images/angular.png">
    </main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

// import {Component} from 'angular2/core';
// import NavBar from './nav.component';
// import Chart from './chart.component';
//
// @Component({
//   selector: 'main-app',
//   template: `
//     <div class="main-app">
//       <nav-bar></nav-bar>
//       <chart></chart>
//     </div>`,
//   directives: [NavBar]
// })
//
// export class AppComponent {
//   constructor() {}
// }

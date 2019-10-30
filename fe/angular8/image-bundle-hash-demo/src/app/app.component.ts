import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // require = require;
  img03 = '../assets/03.png';
  img04 = require('../assets/04.png');
  img07 = 'url("../assets/07.png")';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus-minus-ng-jbc202008';
  display = 0;

  minus() {
    this.display--;
  }

  plus() {
    this.display++;
  }
}

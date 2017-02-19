import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.getTitleForDebug(11);

  x = 5;

  getTitleForDebug(param1) {
    this.x = 6;
    return "'app works for Debug 2!'" + param1;
  }
}

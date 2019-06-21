import { Component } from '@angular/core';
import { routerTransition } from './routerTransition';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}

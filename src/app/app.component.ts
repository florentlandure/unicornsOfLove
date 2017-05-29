import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unicorns of Love';
  menu = [{
    logo: 'home',
    text: 'Home',
    path: '/'
  }, {
    logo: 'heart',
    text: 'Spread the love',
    path: '/mate'
  }, {
    logo: 'info',
    text: 'Documentation',
    path: '/info'
  }];
}

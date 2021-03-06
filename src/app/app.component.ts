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
    text: 'Your herd',
    path: '/'
  }, {
    logo: 'heart',
    text: 'Spread the love',
    path: '/mate'
  }, {
    logo: 'info',
    text: 'Documentation',
    path: '/documentation'
  }];
}

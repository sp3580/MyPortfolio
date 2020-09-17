import { Component } from '@angular/core';

import { PortfolioList } from './portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
  list = PortfolioList;
}

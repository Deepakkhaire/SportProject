import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-tab',
  templateUrl: './sport-tab.component.html',
  styleUrls: ['./sport-tab.component.css']
})
export class SportTabComponent {

  tabs = [
    {
      label: 'InPlay',
      route: 'inplay-matches',
    },
    {
      label: 'Today',
      route: 'today-matches',
    },
    {
      label: 'Tomorrow',
      route: 'tomorrow-matches',
    },
  ];
}

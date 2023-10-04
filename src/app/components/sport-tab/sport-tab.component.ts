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
      active : 'active' 
    },
    {
      label: 'Today',
      route: 'today-matches',
      active : 'active'
    },
    {
      label: 'Tomorrow',
      route: 'tomorrow-matches',
      active : 'active'
    },
  ];
}

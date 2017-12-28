import { Component, animate, trigger,  transition, group, style, state } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveSidebar', [
      state('collapse', style({
        transform : 'translateX(-100%)'
      })),
      state('expand', style({
        transform : 'translateX(0%)'
      })),
      transition('collapse => expand', animate('200ms ease-out')),
      transition('expand => collapse', animate('1000ms ease-in'))
  ]),
  ]
})
export class AppComponent {
  title = 'app';
  // tslint:disable-next-line:no-inferrable-types
  state: string = 'expand';

  onClick() {
    this.state = (this.state === 'expand' ? 'collapse' : 'expand');
  }
}

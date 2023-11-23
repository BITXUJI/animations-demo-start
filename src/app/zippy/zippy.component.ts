import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        opacity: 0
      })),
      transition('collapsed => expanded', [
        animate('300ms ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*'
        })),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {
  @Input() title: string = '';
  isOpen: boolean = false;

  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}


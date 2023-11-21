import { animate, state, style, transition, trigger } from '@angular/animations';
export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter,:leave', [
        animate(2000)
    ])
]);
export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10%' }),
        animate('500ms ease-out')
    ]),
    transition(':leave', [
        animate('2000ms ease-out', style({ transform: 'translateX(100%' }))
    ]),

]);
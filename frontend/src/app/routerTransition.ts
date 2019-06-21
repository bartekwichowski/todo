import {trigger, animate, style, group, animateChild, query, stagger, transition, keyframes} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* => *', animate('300ms ease-in', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1.0})
])))
])
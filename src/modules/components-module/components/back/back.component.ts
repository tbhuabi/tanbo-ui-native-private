import {
    Component,
    HostListener,
    Inject,
    Input
} from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

import { UI_BACK_ICON_CLASSNAME } from '../../config';

@Component({
    selector: 'ui-back',
    templateUrl: './back.component.html'
})
export class BackComponent {
    @Input()
    icon: string = '';

    @Input()
    closeBackHandle: boolean = false;


    constructor(@Inject(DOCUMENT) private document: Document,
                @Inject(UI_BACK_ICON_CLASSNAME) iconName: string,
                private location: Location) {
        this.icon = iconName || '';
    }

    @HostListener('click')
    click() {
        this.location.back();
    }
}
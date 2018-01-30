import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    ViewChild
} from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

import { UI_BACK_ICON_CLASSNAME } from '../../config';

@Component({
    selector: 'ui-back',
    templateUrl: './back.component.html'
})
export class BackComponent implements AfterViewInit {
    @ViewChild('text')
    textElement: ElementRef;

    @Input()
    icon: string = '';

    @Input()
    closeBackHandle: boolean = false;

    private docWidth: number;
    private contentWidth: number;
    private leftDistance: number;
    private translateDistance: number;

    constructor(@Inject(DOCUMENT) private document: Document,
                @Inject(UI_BACK_ICON_CLASSNAME) iconName: string,
                private location: Location) {
        this.icon = iconName || '';
    }

    @HostListener('window:resize')
    resize() {
        this.docWidth = this.document.body.offsetWidth;
        this.translateDistance = this.docWidth / 2 - (this.leftDistance + 10) - this.contentWidth / 2;
    }

    @HostListener('click')
    click() {
        this.location.back();
    }

    ngAfterViewInit() {
        this.docWidth = this.document.body.offsetWidth;
        this.contentWidth = this.textElement.nativeElement.offsetWidth;
        this.leftDistance = this.textElement.nativeElement.offsetLeft;
        this.translateDistance = this.docWidth / 2 - (this.leftDistance + 10) - this.contentWidth / 2;
    }
}
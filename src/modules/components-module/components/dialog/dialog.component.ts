import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'ui-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    @Input()
    show: boolean = false;

    @Output()
    hide = new EventEmitter<void>();

    animationEnd() {
        this.hide.emit();
    }
}
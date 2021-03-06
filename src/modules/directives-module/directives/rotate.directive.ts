import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';
import 'hammerjs';

@Directive({
    selector: '[uiRotate]'
})
export class RotateDirective implements OnInit, OnDestroy {
    @Output()
    uiRotate = new EventEmitter<any>();

    @Input()
    uiRotateOptions: HammerOptions = {};

    private hammerInstance: HammerManager;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        let element = this.elementRef.nativeElement;
        this.hammerInstance = new Hammer(element);
        this.hammerInstance.set(this.uiRotateOptions);
        this.hammerInstance.on('rotate', (event: any) => {
            this.uiRotate.emit(event);
        });
    }

    ngOnDestroy() {
        this.hammerInstance.off('rotate');
    }
}
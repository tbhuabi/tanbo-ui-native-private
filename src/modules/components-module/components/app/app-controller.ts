import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BrowserENV } from '../../config';

@Injectable()
export class AppController {
    onResize$: Observable<BrowserENV>;
    private resizeEvent = new Subject<BrowserENV>();

    constructor() {
        this.onResize$ = this.resizeEvent.asObservable();
    }

    resize(env: BrowserENV) {
        this.resizeEvent.next(env);
    }
}

export function getENV(): BrowserENV {
    const u = navigator.userAgent;
    // android终端
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    // ios终端
    const isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u);

    if (isAndroid) {
        return BrowserENV.android;
    }
    if (isIOS) {
        const screen = window.screen;
        if (screen.width === 375 && screen.height === 812 || screen.height === 375 && screen.width === 812) {
            return BrowserENV.iphoneX;
        }
        return BrowserENV.iphone;
    }
    return BrowserENV.default;
}
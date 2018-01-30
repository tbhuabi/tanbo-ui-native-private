import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// 组件
import { ActionSheetComponent } from './components/action-sheet/action-sheet.component';
import { AlertComponent } from './components/alert/alert.component';
import { AppComponent } from './components/app/app.component';
import { BackComponent } from './components/back/back.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContentComponent } from './components/content/content.component';
import { ContentLoadingComponent } from './components/content-loading/content-loading.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FlexComponent } from './components/flex/flex.component';
import { FlexItemComponent } from './components/flex-item/flex-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListInnerComponent } from './components/list-inner/list-inner.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListOptionComponent } from './components/list-option/list-option.component';
import { ListSlidingComponent } from './components/list-sliding/list-sliding.component';
import { ListThumbnailComponent } from './components/list-thumbnail/list-thumbnail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaskComponent } from './components/mask/mask.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { NavbarExtensionComponent } from './components/navbar-extension/navbar-extension.component';
import { PageComponent } from './components/page/page.component';
import { RefresherComponent } from './components/refresher/refresher.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideItemComponent } from './components/slide-item/slide-item.component';
import { TabComponent } from './components/tab/tab.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TabBarItemComponent } from './components/tab-bar-item/tab-bar-item.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { TabViewItemComponent } from './components/tab-view-item/tab-view-item.component';
import { TitleComponent } from './components/title/title.component';
import { TitleExtensionComponent } from './components/title-extension/title-extension.component';
import { ToastComponent } from './components/toast/toast.component';
import { ViewLoadingBarComponent } from './components/view-loading-bar/view-loading-bar.component';
// 指令

// 服务
import { AppController, getENV } from './components/app/app-controller';

import { AlertController } from './components/alert/alert-controller.service';
import { ConfirmController } from './components/confirm/confirm-controller.service';
import { ContentLoadingController } from './components/content-loading/content-loading.service';
import { ListActivatedService } from './components/list-item/list-activated.service';
import { ToastController } from './components/toast/toast-controller.service';

import { PullUpLoadController } from './controllers/pull-up-load-controller';
import { PullDownRefreshController } from './controllers/pull-down-refresh-controller';

import { UI_BACK_ICON_CLASSNAME, UI_BROWSER_ENV } from './config';

import { UI_DO_REFRESH_DISTANCE } from './controllers/pull-down-refresh-controller';
import { UI_DO_LOAD_DISTANCE } from './controllers/pull-up-load-controller';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ActionSheetComponent,
        AlertComponent,
        AppComponent,
        BackComponent,
        ButtonsComponent,
        CollectionComponent,
        CollectionItemComponent,
        ConfirmComponent,
        ContentComponent,
        ContentLoadingComponent,
        DialogComponent,
        FlexComponent,
        FlexItemComponent,
        FooterComponent,
        HeaderComponent,
        ListComponent,
        ListHeaderComponent,
        ListInnerComponent,
        ListItemComponent,
        ListOptionComponent,
        ListSlidingComponent,
        ListThumbnailComponent,
        LoadingComponent,
        MaskComponent,
        NavBarComponent,
        NavbarExtensionComponent,
        PageComponent,
        RefresherComponent,
        ScrollComponent,
        SlideComponent,
        SlideItemComponent,
        TabComponent,
        TabBarComponent,
        TabBarItemComponent,
        TabViewComponent,
        TabViewItemComponent,
        TitleComponent,
        TitleExtensionComponent,
        ToastComponent,
        ViewLoadingBarComponent
    ],
    exports: [
        ActionSheetComponent,
        AlertComponent,
        AppComponent,
        BackComponent,
        ButtonsComponent,
        CollectionComponent,
        CollectionItemComponent,
        ConfirmComponent,
        ContentComponent,
        ContentLoadingComponent,
        DialogComponent,
        FlexComponent,
        FlexItemComponent,
        FooterComponent,
        HeaderComponent,
        ListComponent,
        ListHeaderComponent,
        ListInnerComponent,
        ListItemComponent,
        ListOptionComponent,
        ListSlidingComponent,
        ListThumbnailComponent,
        LoadingComponent,
        MaskComponent,
        NavBarComponent,
        NavbarExtensionComponent,
        PageComponent,
        RefresherComponent,
        ScrollComponent,
        SlideComponent,
        SlideItemComponent,
        TabComponent,
        TabBarComponent,
        TabBarItemComponent,
        TabViewComponent,
        TabViewItemComponent,
        TitleComponent,
        TitleExtensionComponent,
        ToastComponent,
        ViewLoadingBarComponent
    ]
})
export class UIComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UIComponentsModule,
            providers: [{
                provide: UI_BACK_ICON_CLASSNAME,
                useValue: 'ui-icon-arrow-back'
            }, {
                provide: UI_DO_REFRESH_DISTANCE,
                useValue: 40
            }, {
                provide: UI_DO_LOAD_DISTANCE,
                useValue: 600
            }, {
                provide: UI_BROWSER_ENV,
                useFactory: getENV
            },
                AppController,
                AlertController,
                ConfirmController,
                ContentLoadingController,
                ListActivatedService,
                ToastController,
                PullDownRefreshController,
                PullUpLoadController
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: UIComponentsModule,
            providers: []
        };
    }
}
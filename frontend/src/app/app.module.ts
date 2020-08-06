import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'
import {FormsModule} from '@angular/forms';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(
            {
                mode: 'md'
            }
        ),
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        QRCodeModule,
        NgCircleProgressModule.forRoot({
            radius: 30,
            space: -8,
            showTitle: false,
            showSubtitle: false,
            outerStrokeGradient: true,
            outerStrokeWidth: 8,
            outerStrokeColor: '#2CB9B0',
            outerStrokeGradientStopColor: '#2CB9B0',
            innerStrokeColor: '#CEF6EB',
            innerStrokeWidth: 8,
            animateTitle: false,
            animationDuration: 200,
            showUnits: false,
            showBackground: false,
            clockwise: true,
            startFromZero: false
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        UniqueDeviceID,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

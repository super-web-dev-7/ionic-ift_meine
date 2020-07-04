import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, ToastController} from '@ionic/angular';
import {first} from 'rxjs/operators';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from '../../providers/code/code.service';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.page.html',
    styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    code: any = '';
    attemptCount = 0;

    constructor(
        private router: Router,
        private menu: MenuController,
        private codeService: CodeService,
        public toastController: ToastController,
        private httpRequest: HttpService,
        private dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    code_check() {
        if (this.code === undefined || this.code === null || this.code === '') {
            this.presentToast('Bitte geben Sie Ihren Code ein.');
            return;
        }
        this.codeService.code_check(this.code).pipe(first()).subscribe(res => {
                if (res.isAdmin === 1) this.router.navigate(['/admin']);
                else {
                    this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
                        if (response.result.length > 0) {
                            this.dispenseService.setDispense(response.result[0]);
                            this.router.navigate(['/tagx']);
                        } else {
                            this.router.navigate(['/area']);
                        }
                    })
                }

            }, error => {
                console.log(error);
                this.attemptCount++;
                if (this.attemptCount === 5) {
                    this.attemptCount = 0;
                    this.gotoForgot();
                }
                this.presentToast('Dieser Code ist leider nicht korrekt');
            }
        )
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }

    gotoForgot() {
        this.router.navigate(['/forgot']);
    }
}

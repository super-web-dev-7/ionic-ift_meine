import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, ToastController} from '@ionic/angular';
import {first} from 'rxjs/operators';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from '../../providers/code/code.service';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-backup',
    templateUrl: './backup.page.html',
    styleUrls: ['./backup.page.scss'],
})
export class BackupPage implements OnInit {


    backupPassword: any = '';
    attemptCount = 0;
    isChecked = false;

    constructor(
        public router: Router,
        public menu: MenuController,
        public codeService: CodeService,
        public toastController: ToastController,
        public httpRequest: HttpService,
        public dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    gotoForgot() {
        this.router.navigate(['/forgot']);
    }

    onChange() {
        this.isChecked = !this.isChecked;
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }

    backup_password() {
        if (this.backupPassword === undefined || this.backupPassword === null || this.backupPassword === '') {
            this.presentToast('Bitte geben Sie Ihren Code ein.');
            return;
        }
        this.codeService.backup_password(this.backupPassword).pipe(first()).subscribe(res => {
                if (res.isAdmin === 1) {
                    this.router.navigate(['/admin']);
                } else {
                    this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
                        this.backupPassword = '';
                        if (response.result.length > 0) {
                            this.dispenseService.setDispense(response.result[0]);
                            if (response.result[0].day_after === 14) {
                                this.router.navigate(['/challenge-progress'])
                            } else {
                                this.router.navigate(['/before-feedback']);
                            }
                        } else {
                            this.router.navigate(['/video-guide']);
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
}

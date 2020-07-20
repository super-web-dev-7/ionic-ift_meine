import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {Router} from '@angular/router';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-intensity',
    templateUrl: './intensity.page.html',
    styleUrls: ['./intensity.page.scss'],
})
export class IntensityPage implements OnInit {

    public selectedPercentage: any;

    constructor(
        public menu: MenuController,
        public dispenseService: DispenseService,
        public router: Router,
        public httpRequest: HttpService,
        public toastController: ToastController,
    ) {
        this.selectedPercentage = 100;
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

    selectPercentage(percent) {
        this.selectedPercentage = percent;
    }

    async start() {
        const dispense = {...this.dispenseService.dispenseValue};
        dispense.Intensity = this.selectedPercentage;
        this.httpRequest.createChallenge(dispense).subscribe((res:any) => {
            if (res === 'Already exist') {
                this.presentToast('Already Exist.');
                this.router.navigate(['summary']);
            } else {
                this.dispenseService.setDispense(res[0]);
                this.router.navigate(['summary']);
            }
        })
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }

}

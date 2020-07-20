import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from '@ionic/angular';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-feedback-confirmation',
    templateUrl: './feedback-confirmation.page.html',
    styleUrls: ['./feedback-confirmation.page.scss'],
})
export class FeedbackConfirmationPage implements OnInit {

    dispense: any;
    missedDays = [];

    constructor(
        public menu: MenuController,
        public dispenseService: DispenseService,
        public httpRequest: HttpService,
        public alertController: AlertController
    ) { }

    ngOnInit() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    ionViewWillEnter() {
        this.initialize();
        // this.missedDays = [1];
    }

    initialize() {
        this.httpRequest.get_feedback(this.dispense).subscribe(res => {
            this.missedDays = [];
            for (let i = 0; i < this.dispense.Day_After; i++) {
                if (res['day' + (i + 1)] === null) {
                    this.missedDays.push(i);
                }
            }
        });
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    giveFeedbackAlert(day) {
        this.presentAlertConfirm(day, this.dispense).then();
    }

    async presentAlertConfirm(day, dispense) {
        const alert = await this.alertController.create({
            header: 'Give Feedback!',
            message: 'Which feedback do you want to give?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.daily_Success(true, day);
                    }
                }, {
                    text: 'No',
                    handler: () => {
                        this.daily_Success(false, day);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                    }
                },
            ]
        });

        await alert.present();

    }

    daily_Success(isSuccess, day) {
        this.httpRequest.daily_Success(isSuccess, this.dispense, day).subscribe(res => {
            this.initialize();
        });
    }

}

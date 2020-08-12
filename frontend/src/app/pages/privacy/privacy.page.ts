import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, MenuController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.page.html',
    styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

    @ViewChild('scroll') content: any;

    constructor(
        public menu: MenuController,
        public navCtrl: NavController,
        public alertController: AlertController
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    logScrolling(event) {
        if ((event.detail.scrollTop - 55) > (this.content.nativeElement.scrollHeight - window.innerHeight)) {
            // this.navCtrl.pop();
            this.presentAlertConfirm()
        }
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: '',
            message: 'Have you read privacy policy?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        await alert.present();
    }
}

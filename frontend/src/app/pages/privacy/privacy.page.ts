import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, MenuController, NavController} from '@ionic/angular';
import {CodeService} from '../../providers/code/code.service';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.page.html',
    styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

    @ViewChild('scroll') content: any;
    isOpenAlert = false;

    constructor(
        public menu: MenuController,
        public navCtrl: NavController,
        public alertController: AlertController,
        public codeService: CodeService
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
            if (!this.isOpenAlert) {
                this.presentAlertConfirm()
            }
        }
    }

    async presentAlertConfirm() {
        this.isOpenAlert = true;
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
                        this.alertAction(false);
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.alertAction(true);
                    }
                }
            ]
        });
        await alert.present();
    }

    alertAction(action) {
        this.navCtrl.pop();
        this.isOpenAlert = false;
        this.codeService.setIsReadPrivacyValue(action);

    }
}

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
            console.log('reached')
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
            message: 'Hast du die Datenschutzerklärung gelesen?',
            buttons: [
                {
                    text: 'Nein',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        const navTransition = alert.dismiss();
                        navTransition.then(() => {
                            this.alertAction(false);
                        });
                    }
                }, {
                    text: 'Ja',
                    handler: () => {
                        const navTransition = alert.dismiss();
                        navTransition.then(() => {
                            this.alertAction(true);
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

     alertAction(action) {
         this.isOpenAlert = false;
         this.codeService.setIsReadPrivacyValue(action);
        this.navCtrl.pop();
    }
}

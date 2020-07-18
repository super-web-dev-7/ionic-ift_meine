import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-before-feedback',
    templateUrl: './before-feedback.page.html',
    styleUrls: ['./before-feedback.page.scss'],
})
export class BeforeFeedbackPage implements OnInit {

    dispense: any;

    constructor(
        private menu: MenuController,
        public dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }
}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.page.html',
    styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

    private dispense: any;

    constructor(
        private menu: MenuController,
        private dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

}

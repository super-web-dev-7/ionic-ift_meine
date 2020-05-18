import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-taq',
    templateUrl: './taq.page.html',
    styleUrls: ['./taq.page.scss'],
})
export class TaqPage implements OnInit {

    constructor(
        private menu: MenuController
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

}

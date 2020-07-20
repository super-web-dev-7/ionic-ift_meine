import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-main-challenge',
    templateUrl: './main-challenge.page.html',
    styleUrls: ['./main-challenge.page.scss'],
})
export class MainChallengePage implements OnInit {

    constructor(
        public menu: MenuController,
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-mzo-challenge',
    templateUrl: './mzo-challenge.page.html',
    styleUrls: ['./mzo-challenge.page.scss'],
})
export class MzoChallengePage implements OnInit {

    constructor(
        public menu: MenuController,
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

}

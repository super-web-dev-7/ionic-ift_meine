import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-challenge-cancel-result',
    templateUrl: './challenge-cancel-result.page.html',
    styleUrls: ['./challenge-cancel-result.page.scss'],
})
export class ChallengeCancelResultPage implements OnInit {

    constructor(
        private menu: MenuController,
        public router: Router,
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }
}

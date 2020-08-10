import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-final-page',
    templateUrl: './final-page.page.html',
    styleUrls: ['./final-page.page.scss'],
})
export class FinalPagePage implements OnInit {

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

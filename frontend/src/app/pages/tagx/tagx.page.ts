import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-tagx',
    templateUrl: './tagx.page.html',
    styleUrls: ['./tagx.page.scss'],
})
export class TagxPage implements OnInit {

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

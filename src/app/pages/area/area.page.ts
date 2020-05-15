import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-area',
    templateUrl: './area.page.html',
    styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

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

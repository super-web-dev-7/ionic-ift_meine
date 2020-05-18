import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-intensity',
    templateUrl: './intensity.page.html',
    styleUrls: ['./intensity.page.scss'],
})
export class IntensityPage implements OnInit {

    private selectedPercentage: any;

    constructor(
        private menu: MenuController
    ) {
        this.selectedPercentage = 100;
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

    selectPercentage(percent) {
        this.selectedPercentage = percent;
    }

}

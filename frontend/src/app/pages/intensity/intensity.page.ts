import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-intensity',
    templateUrl: './intensity.page.html',
    styleUrls: ['./intensity.page.scss'],
})
export class IntensityPage implements OnInit {

    private selectedPercentage: any;

    constructor(
        private menu: MenuController,
        private dispenseService: DispenseService,
        private router: Router
    ) {
        this.selectedPercentage = 100;
    }

    ngOnInit() {
        console.log('>>>>>', this.dispenseService.dispenseValue)
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

    selectPercentage(percent) {
        this.selectedPercentage = percent;
    }

    async start() {
        const dispense = this.dispenseService.dispenseValue;
        console.log(dispense)
        dispense.Intensity = this.selectedPercentage;
        await this.dispenseService.setDispense(dispense);
        this.router.navigate(['/summary']);
    }

}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-challenge-progress',
    templateUrl: './challenge-progress.page.html',
    styleUrls: ['./challenge-progress.page.scss'],
})
export class ChallengeProgressPage implements OnInit {

    dispense: any;
    day = new Array(7)
    feedback: any;

    constructor(
        public menu: MenuController,
        public router: Router,
        public dispenseService: DispenseService,
        public httpRequest: HttpService
    ) {
    }

    ngOnInit() {
    }

    async ionViewWillEnter() {
        this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
            if (response.result.length > 0) {
                this.dispenseService.setDispense(response.result[0]);
                this.dispense = this.dispenseService.dispenseValue;
                this.httpRequest.get_feedback(this.dispense).subscribe(
                    res => {
                        this.feedback = res;
                    }, error => console.log(error)
                )
            }
        })
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    // this.router.navigate(['/after-feedback']);

    missing_box(index) {
        if (this.feedback && this.feedback['day' + (index + 1)] === null && this.dispense?.day_after > index) {
            this.router.navigate(['/missing-feedback']);
        }
    }
}

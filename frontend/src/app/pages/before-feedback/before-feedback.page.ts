import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';
import {CodeService} from "../../providers/code/code.service";


@Component({
    selector: 'app-before-feedback',
    templateUrl: './before-feedback.page.html',
    styleUrls: ['./before-feedback.page.scss'],
})
export class BeforeFeedbackPage implements OnInit {

    dispense: any;

    constructor(
        public menu: MenuController,
        public dispenseService: DispenseService,
        public codeService: CodeService,
        public httpRequest: HttpService,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.gotoNextPage();
    }

    ionViewWillEnter() {
    }

    gotoNextPage() {
        this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
            if (response.result.length > 0) {
                this.dispenseService.setDispense(response.result[0]);
                this.dispense = response.result[0];
                this.httpRequest.get_feedback(this.dispense).subscribe(
                    (result: any) => {
                        if (result['day' + this.dispense.day_after] !== null) {
                            this.router.navigate(['/challenge-progress'])
                        } else {
                            this.router.navigate(['/daily-feedback/' + response.result[0]?.day_after]);
                        }
                    }, error => console.log(error)
                )
            } else {
                localStorage.removeItem('currentCode');
                this.codeService.currentCodeSubject.next(null);
                this.router.navigate(['/home']);
            }
        })
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }
}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-missing-feedback',
    templateUrl: './missing-feedback.page.html',
    styleUrls: ['./missing-feedback.page.scss'],
})
export class MissingFeedbackPage implements OnInit {

    dispense: any;
    feedback: any;
    missingFeedback = [];
    day = new Array(14);

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
        this.dispense = this.dispenseService.dispenseValue;
        await this.httpRequest.get_feedback(this.dispense).subscribe(
            res => {
                this.feedback = res;
                for (let index = 0; index < 14; index++) {
                    if (this.feedback
                        && this.feedback['day' + (index + 1)] === null
                        && this.dispense?.day_after > index) {
                        this.missingFeedback.push(index + 1)
                    }
                }
            }, error => console.log(error)
        )
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    setFeedback(day) {
        this.router.navigate(['/daily-feedback/' + day]);
    }

}

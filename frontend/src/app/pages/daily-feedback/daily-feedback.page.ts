import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {Router} from '@angular/router';
import {HttpService} from "../../providers/http/http.service";

@Component({
    selector: 'app-daily-feedback',
    templateUrl: './daily-feedback.page.html',
    styleUrls: ['./daily-feedback.page.scss'],
})
export class DailyFeedbackPage implements OnInit {

    dispense: any;

    constructor(
        private menu: MenuController,
        public router: Router,
        public dispenseService: DispenseService,
        public httpRequest: HttpService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    setFeedback(feedback: boolean) {
        console.log(feedback);
        console.log(this.dispense);
        if (this.dispense.day_after === 0) {
            return;
        }
        this.httpRequest.daily_Success(feedback, this.dispense, this.dispense.day_after).subscribe(res => {
            console.log(res)
            this.router.navigate(['/after-feedback']);
        }, error => console.log(error))
    }
}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-after-feedback',
    templateUrl: './after-feedback.page.html',
    styleUrls: ['./after-feedback.page.scss'],
})
export class AfterFeedbackPage implements OnInit {

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

    reaction(value: number) {
        console.log(value)
        console.log(this.dispense)
        this.httpRequest.setReaction(this.dispense.id, {value, field: 'day' + this.dispense.day_after}).subscribe(
            res => {
                console.log(res)
                this.router.navigate(['/challenge-progress']);
            }, error => {
                console.log(error)
            }
        )
    }
}

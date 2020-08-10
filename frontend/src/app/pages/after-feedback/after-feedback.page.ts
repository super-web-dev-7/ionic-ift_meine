import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-after-feedback',
    templateUrl: './after-feedback.page.html',
    styleUrls: ['./after-feedback.page.scss'],
})
export class AfterFeedbackPage implements OnInit {

    dispense: any;
    day: any;

    constructor(
        public menu: MenuController,
        public router: Router,
        public route: ActivatedRoute,
        public dispenseService: DispenseService,
        public httpRequest: HttpService
    ) {
    }

    ngOnInit() {
        this.day = this.route.snapshot.paramMap.get('day');
    }

    ionViewWillEnter() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    reaction(value: number) {
        this.httpRequest.setReaction(this.dispense.id, {value, field: 'day' + this.day}).subscribe(
            res => {
                this.dispense?.day_after === 14 ?
                    this.router.navigate(['/challenge-progress']) :
                    this.router.navigate(['/final-page']);
            }, error => {
                console.log(error)
            }
        )
    }
}

import {Component, OnInit} from '@angular/core';
import {DispenseService} from '../../providers/dispense/dispense.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-challenge-progress',
    templateUrl: './challenge-progress.page.html',
    styleUrls: ['./challenge-progress.page.scss'],
})
export class ChallengeProgressPage implements OnInit {

    dispense: any;
    day = new Array(14)
    feedback: any;

    constructor(
        private menu: MenuController,
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
                console.log(res)
                this.feedback = res;
            }, error => console.log(error)
        )
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    // this.router.navigate(['/after-feedback']);

}

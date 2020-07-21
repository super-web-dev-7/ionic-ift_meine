import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../providers/http/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    data = {
        all: 0,
        completed: 0,
        running: 0,
        cancelled: 0
    };

    constructor(
        public httpRequest: HttpService
    ) {
        this.httpRequest.get_dashboard_data().subscribe((res: any) => {
            this.data = res;
        })
    }

    ngOnInit() {

    }

    ionViewWillEnter() {

    }

}

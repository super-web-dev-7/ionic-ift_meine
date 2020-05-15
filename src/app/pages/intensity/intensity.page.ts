import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-intensity',
    templateUrl: './intensity.page.html',
    styleUrls: ['./intensity.page.scss'],
})
export class IntensityPage implements OnInit {

    private selectedPercentage: any;

    constructor() {
        this.selectedPercentage = 100;
    }

    ngOnInit() {
    }

    selectPercentage(percent) {
        this.selectedPercentage = percent;
    }

}

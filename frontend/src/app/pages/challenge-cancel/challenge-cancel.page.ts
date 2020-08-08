import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-challenge-cancel',
    templateUrl: './challenge-cancel.page.html',
    styleUrls: ['./challenge-cancel.page.scss'],
})
export class ChallengeCancelPage implements OnInit {
    selectedCategory: number;
    anotherCategory: any;
    category = [
        '... mein Ziel unrealistisch ist',
        '... ich keine Lust mehr habe',
        '... anderer Grund'
    ];

    constructor(
        public menu: MenuController,
        public router: Router,
        public httpRequest: HttpService,
        public dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    selectCategory(value: number) {
        this.selectedCategory = value;
    }

    onClick() {
        if (this.selectedCategory === undefined) {
            return;
        }
        let cancelReason = null;
        if (this.selectedCategory === 2) {
            if (this.anotherCategory) {
                cancelReason = this.anotherCategory;
                // this.categoryService.setCategory({category: this.anotherCategory, type: 'internet'});
                this.anotherCategory = null;
            } else {
                return;
            }
        } else {
            cancelReason = this.category[this.selectedCategory];
            // this.categoryService.setCategory({category: this.category[this.selectedCategory], type: 'internet'});
        }
        this.httpRequest.cancelDispense(this.dispenseService.dispenseValue, cancelReason).subscribe(
            () => {
                this.dispenseService.setDispense({});
            }, error => console.log(error)
        )
        this.router.navigateByUrl('challenge-cancel-result');
    }
}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CategoryService} from '../../../providers/category/category.service';

@Component({
    selector: 'app-smoking-select',
    templateUrl: './smoking-select.component.html',
    styleUrls: ['./smoking-select.component.scss'],
})
export class SmokingSelectComponent implements OnInit {

    public selectedCategory: any;
    public category = [
        'Zigaretten',
        'E-Zigarette, zb. Blu, JUUL',
        '(E-)Shisha',
        '(E-)Zigarre',
        'Wasserpfeife',
        'Tabakerhitzer, zb. iQOS',
        'Andere Art Rauchen / Dampfen',
    ];

    anotherCategory: any;

    constructor(
        public menu: MenuController,
        public router: Router,
        public categoryService: CategoryService
    ) {
    }

    ngOnInit() {
    }

    selectCategory(value) {
        this.selectedCategory = value;
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    gotoDetailSelectPage() {
        if (this.selectedCategory === undefined) {
            return;
        }
        if (this.selectedCategory === 6) {
            if (this.anotherCategory) {
                this.categoryService.setCategory({category: this.anotherCategory, type: 'smoking'});
                this.anotherCategory = null;
            } else {
                return;
            }
        } else {
            this.categoryService.setCategory({category: this.category[this.selectedCategory], type: 'smoking'});
        }
        this.router.navigateByUrl('detail-select-page');
    }

}

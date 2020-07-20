import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoryService} from '../../providers/category/category.service';

@Component({
    selector: 'app-another-select-page',
    templateUrl: './another-select-page.page.html',
    styleUrls: ['./another-select-page.page.scss'],
})
export class AnotherSelectPagePage implements OnInit {
    otherCategory: any;

    constructor(
        public menu: MenuController,
        public categoryService: CategoryService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    gotoDetailSelectPage() {
        this.categoryService.setCategory({category: this.otherCategory, type: 'other'});
        this.otherCategory = null;
    }

}

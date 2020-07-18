import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoryService} from '../../providers/category/category.service';

@Component({
    selector: 'app-category-select',
    templateUrl: './category-select.page.html',
    styleUrls: ['./category-select.page.scss'],
})
export class CategorySelectPage implements OnInit {

    constructor(
        private menu: MenuController,
        public categoryService: CategoryService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

}

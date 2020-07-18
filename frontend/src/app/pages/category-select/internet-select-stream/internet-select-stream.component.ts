import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CategoryService} from "../../../providers/category/category.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-internet-select-stream',
    templateUrl: './internet-select-stream.component.html',
    styleUrls: ['./internet-select-stream.component.scss'],
})
export class InternetSelectStreamComponent implements OnInit {

    public selectedCategory: any;
    public category = [
        'YouTube',
        'Amazon',
        'Netflix',
        'Sky',
        'Apple TV+',
        'Joyn+',
        'Anderer Straeming - Dienst',
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
        if (!this.selectedCategory) {
            return;
        }
        if (this.selectedCategory === 6) {
            if (this.anotherCategory) {
                this.categoryService.setCategory({category: this.anotherCategory, type: 'internet'});
                this.anotherCategory = null;
            } else {
                return;
            }
        } else {
            this.categoryService.setCategory({category: this.category[this.selectedCategory], type: 'internet'});
        }
        this.router.navigateByUrl('detail-select-page');
    }

}

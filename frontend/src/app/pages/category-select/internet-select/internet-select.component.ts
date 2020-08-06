import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CategoryService} from '../../../providers/category/category.service';

@Component({
    selector: 'app-internet-select',
    templateUrl: './internet-select.component.html',
    styleUrls: ['./internet-select.component.scss'],
})
export class InternetSelectComponent implements OnInit {

    public selectedCategory: any;
    anotherCategory: any;
    category = [
        'Streaming',
        'Chat',
        'Social - Media',
        'Andere App'
    ]

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
        if (this.selectedCategory !== undefined) {
            switch (this.selectedCategory) {
                case 0:
                    this.router.navigateByUrl('category-select/internet/stream');
                    break;
                case 1:
                    this.router.navigateByUrl('category-select/internet/chat');
                    break;
                case 2:
                    this.router.navigateByUrl('category-select/internet/social');
                    break;
                case 3:
                    if (this.anotherCategory) {
                        this.categoryService.setCategory({category: this.anotherCategory, type: 'internet'});
                        this.anotherCategory = null;
                    } else {
                        break;
                    }
                    this.router.navigateByUrl('detail-select-page');
                    break;
            }
        }
    }
}

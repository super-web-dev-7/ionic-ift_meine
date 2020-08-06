import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CategoryService} from '../../../providers/category/category.service';

@Component({
    selector: 'app-game-select',
    templateUrl: './game-select.component.html',
    styleUrls: ['./game-select.component.scss'],
})
export class GameSelectComponent implements OnInit {
    public selectedCategory: any;
    public category = [
        'Fortnite',
        'League of Legends',
        'Call of Duty',
        'GTA',
        'Counter Strike',
        'DOTA 2',
        'Anderes Spiel'
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
                this.categoryService.setCategory({category: this.anotherCategory, type: 'game'});
                this.anotherCategory = null;
            } else {
                return;
            }
        } else {
            this.categoryService.setCategory({category: this.category[this.selectedCategory], type: 'game'});
        }
        this.router.navigateByUrl('detail-select-page');
    }
}

import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {CategoryService} from "../../../providers/category/category.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-internet-select-chat',
    templateUrl: './internet-select-chat.component.html',
    styleUrls: ['./internet-select-chat.component.scss'],
})
export class InternetSelectChatComponent implements OnInit {

    public selectedCategory: any = null;
    public category = [
        'WhatsApp',
        'Signal',
        'Telegram',
        'Andere Chat',
    ]
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
        if (this.selectedCategory === null) {
            return;
        }
        if (this.selectedCategory === 3) {
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

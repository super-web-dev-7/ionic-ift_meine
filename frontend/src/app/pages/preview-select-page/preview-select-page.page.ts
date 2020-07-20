import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {CategoryService} from "../../providers/category/category.service";
import {HttpService} from "../../providers/http/http.service";

@Component({
    selector: 'app-preview-select-page',
    templateUrl: './preview-select-page.page.html',
    styleUrls: ['./preview-select-page.page.scss'],
})
export class PreviewSelectPagePage implements OnInit {

    selectedCategory: any;
    showLastSpeech = false;

    constructor(
        public menu: MenuController,
        public categoryService: CategoryService,
        public httpRequest: HttpService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.showLastSpeech = false;
        this.selectedCategory = this.categoryService.categoryValue;
        console.log(this.selectedCategory)
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    reaction(emoji: number) {
        this.showLastSpeech = true;
        console.log(emoji)
        console.log(this.selectedCategory)
        this.httpRequest.setReaction(this.selectedCategory.id, {value: emoji, field: 'reaction'}).subscribe(res => {
            console.log(res)
        }, error => {
            console.log(error)
        })
    }
}

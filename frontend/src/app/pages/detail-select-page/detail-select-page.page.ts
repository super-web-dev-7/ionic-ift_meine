import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';

import {CategoryService} from '../../providers/category/category.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-detail-select-page',
    templateUrl: './detail-select-page.page.html',
    styleUrls: ['./detail-select-page.page.scss'],
})
export class DetailSelectPagePage implements OnInit {
    selectedCategory: any;
    currentValue: any = 0;
    hopeValue: any = 0;
    maximumValue: any = 0;
    placeholder: any;
    label = new Array(3);
    public smokingCategory = [
        'Zigaretten',
        'E-Zigarette, zb. Blu, JUUL',
        '(E-)Shisha',
        '(E-)Zigarre',
        'Wasserpfeife',
        'Tabakerhitzer, zb. iQOS',
        'Andere Art Rauchen / Dampfen',
    ];

    deviceId: any;

    constructor(
        public menu: MenuController,
        public router: Router,
        public categoryService: CategoryService,
        public httpRequest: HttpService,
        public toastController: ToastController,
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.placeholder = 'Minuten';
        this.deviceId = new DeviceUUID().get();
        this.selectedCategory = this.categoryService.categoryValue;
        if (this.selectedCategory.type === 'smoking') {
            this.placeholder = this.selectedCategory.category;
            if (this.selectedCategory.category === this.smokingCategory[0]) {
                this.label[0] = 'Ich rauche täglich';
                this.label[1] = 'Ich möchte täglich weniger rauchen';
                this.label[2] = 'Ich rauche täglich maximal';
            } else if (this.selectedCategory.category === this.smokingCategory[1] ||
                this.selectedCategory.category === this.smokingCategory[2] ||
                this.selectedCategory.category === this.smokingCategory[3]) {
                this.label[0] = 'Ich dampfe täglich';
                this.label[1] = 'Ich möchte täglich weniger dampfe';
                this.label[2] = 'Ich damfpe täglich maximal';
            } else if (
                this.selectedCategory.category === this.smokingCategory[4] ||
                this.selectedCategory.category === this.smokingCategory[5]) {
                this.label[0] = 'Ich dampfen täglich';
                this.label[1] = 'Ich möchte täglich weniger dampfen';
                this.label[2] = 'Ich damfpen täglich maximal';
            } else {
                this.label[0] = 'Ich konsumieren dampfen täglich';
                this.label[1] = 'Ich möchte täglich weniger konsumieren';
                this.label[2] = 'Ich konsumieren täglich maximal';
            }
        } else if (this.selectedCategory.type === 'internet') {
            this.label[0] = 'Ich nutze täglich ' + this.selectedCategory.category;
            this.label[1] = 'Ich verzichte täglich auf ' + this.selectedCategory.category + 'für:';
            this.label[2] = 'Ich nutze täglich maximal ' + this.selectedCategory.category;
        } else if (this.selectedCategory.type === 'game') {
            this.label[0] = 'Ich nutze täglich ' + this.selectedCategory.category;
            this.label[1] = 'Ich möchte auf verzichten ' + this.selectedCategory.category;
            this.label[2] = 'Ich nutze täglich maximal ' + this.selectedCategory.category;
        }
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }

    gotoDetailSelectPage() {
        this.categoryService.setCategory(
            {
                ...this.selectedCategory,
                currentValue: this.currentValue,
                hopeValue: this.hopeValue,
                maximumValue: this.currentValue - this.hopeValue
            }
        );
        this.httpRequest.createChallenge({...this.categoryService.categoryValue, deviceId: this.deviceId}).subscribe((res:any) => {
            if (res === 'exist') {
                this.presentToast('You have already pending challenge');
            } else {
                this.categoryService.setCategory(
                    {
                        ...this.categoryService.categoryValue,
                        id: res[0].id
                    }
                )
                this.router.navigateByUrl('preview-select-page');
            }
        }, error => {
            console.log(error)
        })
    }
}

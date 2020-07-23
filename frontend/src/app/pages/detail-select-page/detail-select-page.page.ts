import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {CategoryService} from '../../providers/category/category.service';
import {Router} from '@angular/router';
import {HttpService} from '../../providers/http/http.service';
import {DeviceUUID} from 'device-uuid';

@Component({
    selector: 'app-detail-select-page',
    templateUrl: './detail-select-page.page.html',
    styleUrls: ['./detail-select-page.page.scss'],
})
export class DetailSelectPagePage implements OnInit {
    selectedCategory: any;
    currentValue: any;
    hopeValue: any;
    maximumValue: any;

    deviceId: any;
    dropdownList = new Array(21);

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
        this.deviceId = new DeviceUUID().get();
        this.selectedCategory = this.categoryService.categoryValue;
        console.log(this.selectedCategory)
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
                maximumValue: this.maximumValue
            }
        )
        this.httpRequest.createChallenge({...this.categoryService.categoryValue, deviceId: this.deviceId}).subscribe((res:any) => {
            if (res === 'exist') {
                console.log('Dispense is already exist')
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

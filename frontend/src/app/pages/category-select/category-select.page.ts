import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';
import {CategoryService} from '../../providers/category/category.service';
import {HttpService} from '../../providers/http/http.service';


@Component({
    selector: 'app-category-select',
    templateUrl: './category-select.page.html',
    styleUrls: ['./category-select.page.scss'],
})
export class CategorySelectPage implements OnInit {

    deviceId: any;

    constructor(
        public menu: MenuController,
        public categoryService: CategoryService,
        public httpRequest: HttpService,
        public router: Router,
        public toastController: ToastController,
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.deviceId = new DeviceUUID().get();
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

    checkAndGotoNextPage(url) {
        this.httpRequest.get_dispenseByDeviceId(this.deviceId).subscribe((res: any) => {
            if (res.result.length === 0) {
                this.router.navigateByUrl('category-select' + url)
            } else {
                this.presentToast('You have already pending challenge');
            }
        }, error => {
        });
    }

    gotoDetailPage() {
        this.httpRequest.createChallenge({...this.categoryService.categoryValue, deviceId: this.deviceId}).subscribe((res:any) => {
            if (res === 'exist') {
                console.log('Dispense is already exist')
                this.presentToast('You have already pending challenge');
                // this.router.navigateByUrl('preview-select-page')
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

import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController, ToastController, IonSlides} from '@ionic/angular';
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

    @ViewChild('slides') slides: IonSlides;

    deviceId: any;
    sliderConfig = {
        slidesPerView: 2,
        spaceBetween: 2,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletElement: 'span'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    };
    slideData = [
        {
            title: 'Alkohol',
            image: 'Asset-1.svg',
        },
        {
            title: 'Rauchen / Dampfen',
            image: 'Asset-4.svg',
        },
        {
            title: 'Canabis',
            image: 'Asset-5.svg',
        },
        {
            title: 'Internet / Smartphone',
            image: 'Asset-2.svg',
        },
        {
            title: 'Gaming / Zocken',
            image: 'Asset-10.svg',
        },
        {
            title: 'glücksspiel',
            image: 'Asset-3.svg',
        }
    ]

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

    slideAction(title: string) {
        if (title === 'Alkohol') {
            console.log('Alcol')
            this.categoryService.setCategory({category: 'Alkohol', type: 'alkohol'});
            this.gotoDetailPage();
        } else if (title === 'Rauchen / Dampfen') {
            this.checkAndGotoNextPage('/smoking')
        } else if (title === 'Canabis') {
            this.categoryService.setCategory({category: 'Canabis', type: 'canabis'});
            this.gotoDetailPage();
        } else if (title === 'Internet / Smartphone') {
            this.checkAndGotoNextPage('/internet');
        } else if (title === 'Gaming / Zocken') {
            this.checkAndGotoNextPage('/game');
        } else if (title === 'glücksspiel') {
            this.categoryService.setCategory({category: 'glücksspiel', type: 'gluck'});
            this.gotoDetailPage();
        }
    }

    prevSlide() {
        this.slides.slidePrev();
    }

    nextSlide() {
        this.slides.slideNext();
    }
}

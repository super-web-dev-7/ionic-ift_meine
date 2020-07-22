import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";

@Component({
    selector: 'app-backup',
    templateUrl: './backup.page.html',
    styleUrls: ['./backup.page.scss'],
})
export class BackupPage implements OnInit {


    backupPassword: any = '';

    constructor(
        public router: Router,
        public menu: MenuController,
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    gotoForgot() {
        this.router.navigate(['/forgot']);
    }
}

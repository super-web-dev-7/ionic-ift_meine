import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ModalController} from '@ionic/angular';

import {HttpService} from '../../../providers/http/http.service';
import {CodeRegisterComponent} from './Create/code-register.component';

@Component({
    selector: 'app-code-register',
    templateUrl: './code-register.page.html',
    styleUrls: ['./code-register.page.scss'],
})
export class CodeRegisterPage implements OnInit {

    displayedColumns: string[] = ['Code', 'backup', 'IsAdmin', 'Created_AT'];

    dataSource = new MatTableDataSource<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(
        public httpRequest: HttpService,
        public modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        this.initialize();
    }

    initialize() {
        this.httpRequest.get_all_codes('alphanumeric').subscribe((res: any) => {
            this.dataSource.data = res;
        });
    }

    ionViewDidEnter() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    DateFormat(datetime) {
        const d = new Date(datetime)
        return d.getFullYear() + '-' + this.appendLeadingZeroes(d.getMonth() + 1) + '-' + this.appendLeadingZeroes(d.getDate());
    }

    appendLeadingZeroes(n) {
        if (n <= 9) {
            return '0' + n;
        }
        return n
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    async showModal() {
        const modal = await this.modalCtrl.create({
            component: CodeRegisterComponent
        });

        modal.onDidDismiss().then((data) => {
            this.initialize();
        });

        return await modal.present();
    }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {HttpService} from '../../../providers/http/http.service';

@Component({
    selector: 'app-daten',
    templateUrl: './daten.page.html',
    styleUrls: ['./daten.page.scss'],
})
export class DatenPage implements OnInit {

    displayedColumns: string[] = ['DeviceID', 'EntryCode', 'StartedAt', 'EndedAt', 'Status'];

    dataSource = new MatTableDataSource<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(
        public httpRequest: HttpService
    ) { }

    ngOnInit() {
        this.httpRequest.get_all_dispenses().subscribe((res: any) => {
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

    appendLeadingZeroes(n){
        if(n <= 9){
            return '0' + n;
        }
        return n
    }

    getEndDate(datetime, dayAfter) {
        const d = new Date(datetime);
        return this.DateFormat(d.setDate(d.getDate() + dayAfter));
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}

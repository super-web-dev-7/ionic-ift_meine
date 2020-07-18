import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    public categorySubject: BehaviorSubject<any>;
    public category: Observable<any>;

    constructor(
        private httpRequest: HttpService
    ) {
        this.categorySubject = new BehaviorSubject<any>(null);
        this.category = this.categorySubject.asObservable();
    }

    public get categoryValue(): any {
        return this.categorySubject.value;
    }

    public setCategory(data): void {
        console.log('data >>>>>> ', data)
        this.categorySubject.next(data);
    }
}

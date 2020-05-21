import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class DispenseService {

    public dispenseSubject: BehaviorSubject<any>;
    public dispense: Observable<any>;

    constructor(
        private httpRequest: HttpService
    ) {
        this.dispenseSubject = new BehaviorSubject<any>(null);
        this.dispense = this.dispenseSubject.asObservable();
    }

    public get dispenseValue(): any {
        return this.dispenseSubject.value;
    }

    public setDispense(data): void {
        this.dispenseSubject.next(data);
    }
}

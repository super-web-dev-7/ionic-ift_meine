import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import {HttpService} from '../http/http.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CodeService {

    public currentCodeSubject: BehaviorSubject<any>;
    public currentCode: Observable<any>;

    constructor(
        private httpRequest: HttpService,
    ) {

        if (sessionStorage.getItem('currentCode') != null) {
            this.currentCodeSubject = new BehaviorSubject<any>(jwt_decode(sessionStorage.getItem('currentCode')));
            this.currentCode = this.currentCodeSubject.asObservable();
        } else {
            this.currentCodeSubject = new BehaviorSubject<any>(null);
            this.currentCode = this.currentCodeSubject.asObservable();
        }
    }

    public get currentCodeValue(): any {
        return this.currentCodeSubject.value;
    }

    code_check(code: number) {
        return this.httpRequest.code_check(code).pipe(map((res: any) => {
            console.log(res);
            const Code = jwt_decode(res.token);
            if (res) {
                sessionStorage.setItem('currentCode', res.token);
                this.currentCodeSubject.next(jwt_decode(res.token));
            }
            return Code;
        }))
    }
}

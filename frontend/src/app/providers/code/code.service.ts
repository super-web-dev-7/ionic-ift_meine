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

    public isReadPrivacySubject: BehaviorSubject<boolean>;
    public isReadPrivacy: Observable<boolean>;

    constructor(
        public httpRequest: HttpService,
    ) {
        this.isReadPrivacySubject = new BehaviorSubject<boolean>(localStorage.getItem('ift_privacy') === 'true');
        this.isReadPrivacy = this.isReadPrivacySubject.asObservable();

        if (localStorage.getItem('currentCode') != null) {
            this.currentCodeSubject = new BehaviorSubject<any>(jwt_decode(localStorage.getItem('currentCode')));
            this.currentCode = this.currentCodeSubject.asObservable();
        } else {
            this.currentCodeSubject = new BehaviorSubject<any>(null);
            this.currentCode = this.currentCodeSubject.asObservable();
        }
    }

    public get currentCodeValue(): any {
        return this.currentCodeSubject.value;
    }

    public setIsReadPrivacyValue(value) {
        this.isReadPrivacySubject.next(value);
    }

    public get isReadPrivacyValue(): boolean {
        return this.isReadPrivacySubject.value;
    }

    code_check(code: string) {
        return this.httpRequest.code_check(code).pipe(map((res: any) => {
            if (res) {
                localStorage.setItem('currentCode', res.token);
                this.currentCodeSubject.next(jwt_decode(res.token));
            }
            return jwt_decode(res.token);
        }))
    }

    backup_password(code: string) {
        return this.httpRequest.backup_password(code).pipe(map((res: any) => {
            if (res) {
                localStorage.setItem('currentCode', res.token);
                this.currentCodeSubject.next(jwt_decode(res.token));
            }
            return jwt_decode(res.token);
        }))
    }
}

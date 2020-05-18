import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UrlJSON} from '../../utils/UrlJson';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient) {
    }

    code_check(code) {
        return this.http.get(`${UrlJSON.Code_Check_URL}?code=${code}`)
    }

}

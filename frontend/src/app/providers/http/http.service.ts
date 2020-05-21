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

    update_dispense(dispense) {
        return this.http.put(`${UrlJSON.Dispense_URL}?deviceId=${dispense.DeviceId}`, dispense);
    }

    get_dispenseByDeviceId(deviceId) {
        return this.http.get(`${UrlJSON.Dispense_URL}?deviceId=${deviceId}`);
    }

    createChallenge(dispense) {
        return this.http.post(`${UrlJSON.Dispense_URL}`, dispense);
    }

    daily_Success(isSuccess, dispense) {
        return this.http.put(`${UrlJSON.Daily_URL}/${dispense.Id}`, {success: isSuccess, day: dispense.Day_After});
    }

}

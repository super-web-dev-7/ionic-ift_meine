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

    daily_Success(isSuccess, dispense, day) {
        return this.http.put(`${UrlJSON.Daily_URL}/${dispense.Id}`, {success: isSuccess, day});
    }

    get_feedback(dispense) {
        return this.http.get(`${UrlJSON.Daily_URL}/${dispense.Id}`);
    }

    // Admin

    get_dashboard_data() {
        return this.http.get(`${UrlJSON.Admin_URL}/dashboard`);
    }

    get_all_dispenses() {
        return this.http.get(`${UrlJSON.Admin_URL}/alldispenses`);
    }

    get_all_codes() {
        return this.http.get(`${UrlJSON.Admin_URL}/allcodes`);
    }

    addCode(data) {
        return this.http.post(`${UrlJSON.Admin_URL}/createCode`, data);
    }

}

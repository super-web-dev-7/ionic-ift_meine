import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL;
const API_URL = environment.API_URL;

export const UrlJSON = {
    Code_Check_URL: API_URL + 'code',
    Dispense_URL: API_URL + 'dispense',
    Daily_URL: API_URL + 'daily'
};

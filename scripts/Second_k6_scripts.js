import http from 'k6/http';
import { check, sleep } from 'k6';
//import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";



export const options = {
    vus: 5,
    duration: '10s',
    thresholds:{
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    const response = http.get('https://test.k6.io');

    check(response, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}

//export function handleSummary(data) {
    //return {
        //"report1.html": htmlReport(data),
    //};
//}   
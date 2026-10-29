import http from 'k6/http';
import { check, sleep } from 'k6';


const BASE_URL =__ENV.BASE_URL || 'https://test.k6.io';

export const options = {
    vus: 5,
    duration: '10s',
    thresholds:{
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    const response = http.get(BASE_URL);

    check(response, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}
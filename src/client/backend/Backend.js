import 'babel-es6-polyfill';
import 'isomorphic-fetch';

const BACKEND_URL = 'http://localhost:8080';

export function fetchJson(path) {
    const url = `${BACKEND_URL}${path}`;
    console.log(url);


    return fetch(url).then(response => response.json())
        .catch(ex => {
            console.error('parsing failed', ex);
        });
}

export function sendJson(method, path, payload) {
    const url = `${BACKEND_URL}${path}`;

    return fetch(url, {
        method:  method,
        body:    JSON.stringify(payload),
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(ex => {
            console.error('parsing failed', ex);
        });
}
import {startPreloader, stopPreloader} from "../SPABuilder/functions/preloader";

class HTTP {
    get(url) {
        return sendRequest("GET", url);
    }

}

function sendRequest(method, url) {
    startPreloader();
    return fetch(url, {method}).then(response => response.json()).finally(stopPreloader);
}

export const http = new HTTP();
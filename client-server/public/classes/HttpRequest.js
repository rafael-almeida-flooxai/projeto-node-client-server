class HttpRequest {

    static get(url, params = {}) {

        HttpRequest.request('GET', url, params);

    }

    static delete(url, params = {}) {

        HttpRequest.request('DELETE', url, params);

    }

    static put(url, params = {}) {

        HttpRequest.request('PUT', url, params);

    }

    static post(url, params = {}) {

        HttpRequest.request('POST', url, params);

    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), url);

            ajax.onerror = event

            ajax.onload = event => {

                let obj = { users: [] };

                try {

                    let obj = JSON.parse(ajax.responseText)

                } catch (e) {

                    reject(e);
                    console.error(e);

                }

                resolve(obj);

            };

            ajax.setRequestHeader('Content-Type', 'application/json');
            ajax.send(JSON.stringify(params));
        })
    }

}
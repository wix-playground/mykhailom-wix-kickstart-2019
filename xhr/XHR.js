class XHR {
    get(url, callback) {
        this.makeRequest('GET', url, undefined, callback);
    }

    post(url, body, callback) {
        this.makeRequest('POST', url, body, callback);
    }

    makeRequest(method, url, body, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.send(body ? JSON.stringify(body) : undefined);

        xhr.addEventListener('load', () => {
            const data = JSON.parse(xhr.response);
            callback(data);
        });
    }
}

const myXHR = new XHR();

// myXHR.get('data.json', data => {
//     console.log(data);
// });
//
// myXHR.post('http://jsonplaceholder.typicode.com/posts', { myData: 'Hello' }, data => {
//     console.log(data);
// });
class HttpClient {

    invoke(method, url, json){
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.onerror = function(){
                reject(new Error("Errore nella connessione a " + url));
            };
            xhr.onload = function () {
                try {
                    if (xhr.status >= 200 && xhr.status <= 299) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                } catch (error) {
                    reject(error);
                }
            };
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            if (json === null || json === undefined){
                xhr.send();
            }else{
                xhr.send(json);
            }
        });
    }

    post(url, json){
        return this.invoke('POST', url, json);
    }

    put(url, json){
        return this.invoke('PUT', url, json);
    }

    get(url){
        return this.invoke('GET', url);
    }

    delete(url){
        return this.invoke('DELETE', url);
    }
}
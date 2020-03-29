function validateRequest(request) {
    let validMethod = false;
    let validUri = false;
    let validVersion = false;
    let validMessage = false;

    function methodValidation(request) { 
        let validMethod = false;
        if (request.method === 'GET' || request.method === 'POST' || 
        request.method === 'DELETE' || request.method === 'CONNECT') {
            validMethod = true;
        }
        return validMethod;
    }

    function uriValidation(request) {
        let validUri = false;
        let uriPattern = /^[a-zA-Z0-9.]+$/gm;
        if (request.uri === '*' || uriPattern.test(request.uri)) {
            validUri = true;
        }
        return validUri;
    }

    function versionValidation(request) {
        let validVersion = false;
        if (request.version === 'HTTP/0.9' || request.version === 'HTTP/1.0' 
        || request.version === 'HTTP/1.1' || request.version === 'HTTP/2.0') {
            validVersion = true;
        }
        return validVersion;
    }

    function messageValidation(request) {
        let validMessage = false;
        let messagePattern = /^[^<>\\&'"]+$/gm;
        if (request.message === '' || messagePattern.test(request.message)) {
            validMessage = true;
        }
        return validMessage;
    }

    function printErrorMes(header) {
        throw new Error(`Invalid request header: Invalid ${header}`);
    }
    
    if (request.hasOwnProperty('method')) {
       validMethod = methodValidation(request);
       if (!validMethod) {
        printErrorMes('Method');
       }
    } else {
        printErrorMes('Method');
    }

    if (request.hasOwnProperty('uri')) {
       validUri = uriValidation(request);
       if (!validUri) {
        printErrorMes('URI');
       }
    } else {
        printErrorMes('URI');
    }

    if (request.hasOwnProperty('version')) {
        validVersion = versionValidation(request);
        if (!validVersion) {
            printErrorMes('Version');
           }
    } else {
            printErrorMes('Version');
    }

    if (request.hasOwnProperty('message')) {
       validMessage = messageValidation(request);
       if (!validMessage) {
        printErrorMes('Message');
       }
    } else {
        printErrorMes('Message');
    }
    
if (validMethod && validUri && validVersion && validMessage) {
    return request;
}

}

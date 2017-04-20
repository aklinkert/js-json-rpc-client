/**
 * RpcError is a simple error wrapper holding the request and the response.
 */
export default class RpcError extends Error {
    constructor(message, request, response) {
        super(message);

        this.name = 'RpcError';
        this.message = (message || '');
        this.request = request;
        this.response = response;
    }

    toString() {
        return this.message;
    }

    getRequest() {
        return this.request;
    }

    getResponse() {
        return this.response;
    }
}

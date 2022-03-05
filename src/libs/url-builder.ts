export default class URLBuilder {
    private _protocol: string
    private _hostname: string
    private _path: string
    private _params: string
    private _hash: string

    constructor() {
        this._protocol = 'https'
        this._hostname = 'www.kaskus.co.id'
        this._path = ''
        this._params = '?'
        this._hash = '#'
    }

    protocol(protocol: string = 'https') {
        this._protocol = protocol
        return this
    }

    hostname(hostname: string = 'www.kaskus.co.id') {
        this._hostname = hostname
        return this
    }

    path(...path: Array<string>) {
        this._path = this._path + path.join('/')
        return this
    }

    params(...params: Array<Array<string>>) {
        let allParams: string = ''
        params.forEach((item, index) => {
            if (index == 0) {
                allParams = item[0] + '=' + item[1]
            } else {
                allParams = allParams + '&' + item[0] + '=' + item[1]
            }
        })
        this._params = this._params + allParams
        return this
    }

    hash(hash: string) {
        this._hash = this._hash + hash
        return this
    }

    toString() {
        let url = `${this._protocol}://${this._hostname}/${this._path}`
        if (this._params !== '?') url = url + this._params
        if (this._hash !== '#') url = url + this._hash

        return url
    }
}











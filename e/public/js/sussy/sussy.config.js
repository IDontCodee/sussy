class sussyConfig {
    constructor() {
        this.usingPort = () => { if (window.location.port) { return true } else { return false } }
        this.sus_server = '/not-sus-server/'
        this._co = '/co/gateway?url='
        this._rho = '/rho/gateway?url='
    }
}
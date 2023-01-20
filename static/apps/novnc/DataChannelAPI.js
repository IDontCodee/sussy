/*
custom lib for sussy
*/

export default class DataChannelAPI {
    constructor(sessionId, banner) {
        if(!sessionId) throw new Error("sessionId must be provided!");
        this.banner = banner;
        this.connection = new RTCPeerConnection(this.config);
    }
    config = {
    }
}
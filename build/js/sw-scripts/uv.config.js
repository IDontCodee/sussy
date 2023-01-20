self.__uv$config = {
    prefix: '/sw-src/',
    bare: '/not-sus-server/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/js/sw-scripts/uv.handler.js',
    bundle: '/js/sw-scripts/uv.bundle.js',
    config: '/js/sw-scripts/uv.config.js',
    sw: '/js/sw-scripts/uv.sw.js',
};
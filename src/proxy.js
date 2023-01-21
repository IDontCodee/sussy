/*global StompBoot, __uv$config */
import { bareServerURL } from "./consts";

export const swSupported = navigator.serviceWorker !== undefined;

if (swSupported) {
  navigator.serviceWorker.register(window.location.origin + "/sw.js");

  navigator.serviceWorker.register(new URL("/sw-handler.js", window.location), {
    scope: __uv$config.prefix,
  });
}

export var stomp =
  swSupported &&
  new StompBoot({
    bare_server: bareServerURL,
    directory: "/stomp/",
    loglevel: StompBoot.LOG_ERROR,
    codec: StompBoot.CODEC_XOR,
  });

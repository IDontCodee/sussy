/*
Copyright © Fog Network
Made by Nebelung
MIT license: https://opensource.org/licenses/MIT
*/

const express = require("express")
const app = express()
const basicAuth = require("express-basic-auth");
const config = require("./config.json")
const port = process.env.PORT || config.port
const Corrosion = require("./lib/server")
const PalladiumProxy = require("./palladium/server")
const auth = process.env['auth']
const username = process.env['username']
const password = process.env['password']
const users = {}
users[username] = password
const mist = require("mist-yt");
const fetch = require("node-fetch");

const proxy = new Corrosion({
    prefix: "/corrosion/",
    codec: "xor",
    title: "sussy",
    forceHttps: true,
    requestMiddleware: [
        Corrosion.middleware.blacklist([
            "accounts.google.com",
        ], "Page is blocked"),
    ]
});

proxy.bundleScripts();

const Palladium = new PalladiumProxy({
  encode: "xor",
  ssl: false,
  prefix: "/palladium/",
  server: app,
  Corrosion: [true, proxy],
  title: "sussy",
  /*"requestMiddleware": [
    PalladiumProxy.blackList(["accounts.google.com"], "Page is Blocked")
  ],*/
})

Palladium.init();

if (auth == "true") { 
app.use(basicAuth({
    users,
    challenge: true,
    unauthorizedResponse: autherror
}));
}

function autherror(req) {
    return req.auth
        ? ("Credentials " + req.auth.user + ":" + req.auth.password + " rejected")
        : "<!DOCTYPE html><html lang="en"><head><style>*{margin:0;padding:0}body{background:#233142}.whistle{width:20%;fill:#f95959;margin:100px 40%;text-align:left;transform:translate(-50%,-50%);transform:rotate(0);transform-origin:80% 30%;animation:wiggle .2s infinite}@keyframes wiggle{0%{transform:rotate(3deg)}50%{transform:rotate(0)}100%{transform:rotate(3deg)}}h1{margin-top:-100px;margin-bottom:20px;color:#facf5a;text-align:center;font-family:Raleway;font-size:90px;font-weight:800}h2{color:#455d7a;text-align:center;font-family:Raleway;font-size:30px;text-transform:uppercase}</style><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link href="https://fonts.googleapis.com/css?family=Raleway:500,800" rel="stylesheet"><title>403</title></head><body><use><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" class="whistle"><metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4295.8,3963.2c-113-57.4-122.5-107.2-116.8-622.3l5.7-461.4l63.2-55.5c72.8-65.1,178.1-74.7,250.8-24.9c86.2,61.3,97.6,128.3,97.6,584c0,474.8-11.5,526.5-124.5,580.1C4393.4,4001.5,4372.4,4001.5,4295.8,3963.2z"/><path d="M3053.1,3134.2c-68.9-42.1-111-143.6-93.8-216.4c7.7-26.8,216.4-250.8,476.8-509.3c417.4-417.4,469.1-463.4,526.5-463.4c128.3,0,212.5,88.1,212.5,224c0,67-26.8,97.6-434.6,509.3c-241.2,241.2-459.5,449.9-488.2,465.3C3181.4,3180.1,3124,3178.2,3053.1,3134.2z"/><path d="M2653,1529.7C1644,1445.4,765.1,850,345.8-32.7C62.4-628.2,22.2-1317.4,234.8-1960.8C451.1-2621.3,947-3186.2,1584.6-3500.2c1018.6-501.6,2228.7-296.8,3040.5,515.1c317.8,317.8,561,723.7,670.1,1120.1c101.5,369.5,158.9,455.7,360,553.3c114.9,57.4,170.4,65.1,1487.7,229.8c752.5,93.8,1392,181.9,1420.7,193.4C8628.7-857.9,9900,1250.1,9900,1328.6c0,84.3-67,172.3-147.4,195.3c-51.7,15.3-790.8,19.1-2558,15.3l-2487.2-5.7l-55.5-63.2l-55.5-61.3v-344.6V719.8h-411.7h-411.7v325.5c0,509.3,11.5,499.7-616.5,494C2921,1537.3,2695.1,1533.5,2653,1529.7z"/></g></g></svg></use><h1>403</h1><h2>Stop stealing our links, please!</h2></body></html>"
}

app.use(express.static("./public", {
    extensions: ["html"]
}));

app.get("/", function(req, res){
    res.sendFile("index.html", {root: "./public"});
});

app.get("/suggestions", function(req, res){
async function getsuggestions() {
var term = req.query.q || "";
var response = await fetch("https://duckduckgo.com/ac/?q=" + term + "&type=list");
var result = await response.json();
var suggestions = result[1]
res.send(suggestions)
}
getsuggestions()
});

app.use(function (req, res) {
    if (req.url.startsWith("/watch")) {
      mist.watch(req, res)
    } else if (req.url.startsWith("/video")) {
      mist.video(req, res)
    } else if (req.url.startsWith(proxy.prefix)) {
      proxy.request(req,res);
    } else if (req.url.startsWith(Palladium.prefix)) {
      return Palladium.request(req, res)
    } else {
      res.status(404).sendFile("404.html", {root: "./public"});
    }
})

app.listen(port, () => {
  console.log(`The Impostor created a vent from the other side at https://sussy.player123456789.repl.co on port ${port}`)
})

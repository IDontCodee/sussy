/*
Copyright © Fog Network
Made by Nebelung
MIT license: https://opensource.org/licenses/MIT
*/

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express")
const app = express()
const basicAuth = require("express-basic-auth");
const config = require("./config.json")
const port = process.env.PORT || config.port
const Corrosion = require("./lib/server")
import RhodiumProxy from 'Rhodium';
const auth = process.env['auth']
const username = process.env['username'] || config.username
const password = process.env['password'] || config.password
const users = {}
users[username] = password
const fetch = require("node-fetch");
import Server from 'bare-server-node';

const bare = new Server('/not-sus-server/', '');

const proxy = new Corrosion({
    prefix: "/co/",
    codec: "xor",
    title: "sussy",
    forceHttps: true,
    requestMiddleware: [
        Corrosion.middleware.blacklist([
            "accounts.google.com",
        ], "Page is not allowed here or is not compatible"),
    ]
});

proxy.bundleScripts();

const Rhodium = new RhodiumProxy({
  encode: "xor",
  prefix: "/rho/",
  server: app,
  Corrosion: [true, proxy],
  title: "sussy"
})

Rhodium.init();

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
        : "Error"
}

app.use(express.static(config.ROOT, {
    extensions: ["html"]
}));

app.get("/", function(req, res){
    res.sendFile("index.html", {root: config.ROOT});
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
    if (req.url.startsWith(proxy.prefix)) {
      proxy.request(req,res);
    } else if (req.url.startsWith(Rhodium.prefix)) {
      return Rhodium.request(req, res)
    } else if (req.url.startsWith("/not-sus-server/")) {
      return bare.route_request(req, res)
    } else {
      res.status(404).sendFile("404.html", {root: config.ROOT});
    }
})

app.listen(port, () => {
  console.log(`The Impostor created a vent from the other side on port ${port}`)
})
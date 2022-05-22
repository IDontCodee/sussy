<div align="center">

<img style="border-radius:50%" height="150px" src="https://raw.githubusercontent.com/IDontCodee/sussy/main/public/img/logo.svg">

<h1>Sussy</h1>

<p>Surf without web filters or restrictions. Made with style, Sussy is a rather fancy service dedicated to protecting your freedom from censorship.
Read the documentation below to find out more</p>
  
</div>

<p align="center">
<a href="https://heroku.com/deploy?template=https://github.com/IDontCodee/Sussy"><img height="30px" src="https://raw.githubusercontent.com/FogNetwork/Tsunami/main/deploy/heroku2.svg"><img></a>
</p>

## Documentation

- [Overview](#overview)
  - [Supported Sites](#supported-sites)
  - [Features](#features)
  - [Pages](#pages)
- [Configuration](#configuration)
- [Support](#support)
  - [FAQ](#faq)
- [More](#more)
  - [Credits](#credits)
  - [Contributing](#contributing)

## Overview

### Supported Sites

- google.com
- discord.com
- youtube.com
- invidio.us
- reddit.com
- wolframalpha.com
- 1v1.lol
- schoolcheats.net?

### Features

- All the best proxies
- Nice game library
- Tab cloaking and other cool features
- Basic auth
- Customizable CSS
- Installable PWA
- Build in youtube downloader

## Pages

- `/` Homepage
- `/1` Arcade
- `/2` Chatbox
- `/3` Settings
- `/4` Terms
- `/5` Privacy
- `/6` Documentation
- `/7` Credits
- `/8` Support and Contact
- `/9` Youtube
- `/404` 404 Error

## Configuration

**/public/js/go.js**

```js
var palladiumproxy = window.location.protocol + "//" + window.location.hostname + "/palladium/gateway?url="

var corrosionproxy = window.location.protocol + "//" + window.location.hostname + "/corrosion/gateway?url="

```
`palladiumproxy` Location for Palladium proxy

`corrosionproxy` Location for Corrosion proxy

Custom Proxy Example:

```js
var palladiumproxy = "https://example.com/palladium/"
```

## Support

### FAQ

**Captcha not working/issues**

Captcha is only supported on Womginx, though the support is limited

**Why is Discord not working properly?**

Try using Womginx or Corrosion. Refreshing the page might help

## More

### Credits

[Nebelung](https://github.com/Nebelung-Dev) - Owner and Main Developer

[EnderKingJ](https://github.com/EnderKingJ) - Proxy Developer

[Quite A Fancy Emerald](https://github.com/QuiteAFancyEmerald) - Holy Unblocker King

[Caracal.js](https://github.com/caracal-js) - Proxy Developer

[MikeLime](https://github.com/MikeLime-dev) - Developer

[BinBashBanana](https://github.com/BinBashBanana) - Game Library and PyDodge 

[Binary Person](https://github.com/binary-person) - Creator of Womginx

[Divide](https://github.com/vibedivide) - SystemYA and Chatbox Creator

[Shirt](https://github.com/shirt-dev) - Proxy Developer

### Contributing

See [CONTRIBUTING.md](https://github.com/IDontCodee/sussy/blob/main/CONTRIBUTING.md)

Special Thanks To Quite A Fancy Emerald, Inspiration for Tsunami

Also Special Thanks To Nebelung-Dev, who made Tsunami, the base of Sussy.

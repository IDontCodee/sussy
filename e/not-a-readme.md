#!/bin/rick

<div align="center">
<img src="https://socialify.git.ci/IDontCodee/sussy/image?description=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FIDontCodee%2Fsussy%2Fmain%2Fstatic%2Fimg%2Flogo.svg&name=1&owner=1&pattern=Solid&theme=Auto" alt="sussy" width="640" height="320" />

<a href="https://render.com/deploy?repo=https://github.com/IDontCodee/sussy">
<img src="https://img.shields.io/badge/render-4f65f1.svg?style=for-the-badge&logo=render&logoColor=46e3b7"><img>
</a>

<a href="https://repl.it/github/IDontCodee/sussy">
<img src="https://amethystnetwork-dev.github.io/assets/replit.svg"><img>
</a>

<a href="https://railway.app/new/template/jSGwUW?referralCode=8zUUBB">
<img src="https://img.shields.io/badge/Railway-%234f0599.svg?style=for-the-badge&logo=railway&logoColor=white"><img>
</a>

<a href="https://app.koyeb.com/deploy?type=git&repository=github.com/IDontCodee/sussy&branch=main&name=sussy">
<img src="https://img.shields.io/badge/koyeb-121212.svg?style=for-the-badge&logo=koyeb&logoColor=87fcc4"><img>
</a>

</div>

## Features
- Simple clean design
- Support for many popular sites
- Advanced customization
- Mobile support
- A huge library of themes
- Customizable interface and tab

## Setup
### Run
Run `yarn start` to start a webserver. sussy must be built before attempting to start.

### Build
Run `yarn build` to build app for production to the `build` folder.

### Development
Run `yarn dev` to run sussy in development mode.

### Build and Run
Run `yarn build_run` to build sussy for production and start the webserver.

## Configuration

sussy uses ENV variables for config.

- `auth` - If auth is enabled. Can be `true` or `false`.
- `username` - The username if auth is enabled.
- `password` - The password if auth is enabled.
- `INVITE_URL` - The link for the discord button on the home page.
- `CHATBOX_URL` - The link for the chatbox.

#### Quick links to how to configure for:

- [Cloud Services](#Cloud-services)
- [Self hosting](#Self-host)

### Cloud-services

For Render, From the [Render Dashboard](https://dashboard.render.com/), click on the service that you want to add the environment variable to. Then click on Environment in the left pane, and then click on Add Environment Variable.

![Service environment variables widget](https://render.com/static/000c3b72bd6bb16fbaa86bae150ea717/2b72d/service-key-value.png)

For Railway, click into the variables tab.

Image from Railway's docs:

![Screenshot of Variables Pane](https://res.cloudinary.com/railway/image/upload/v1656640465/docs/variables-editor_rvhbim.png)

For Replit, click the padlock icon in the left-hand navigation bar.

Image from Replit's docs:

![The environment variables panel](https://replit-docs-images.util.repl.co/images/repls/env-variables.png)


### Self-host


Self-hosting is a bit harder.

Find the file named `.env.example` and read the instructions inside.

Remember to copy the file and not rename the example file! If you rename the example file it will break everything!

Here is a example `.env` file filled out:

```
# If auth is enabled. Can be "true" or "false" . No quotes are needed
auth=false

# The username if auth is enabled. Double quotes are needed
username="username"

# The password if auth is enabled. Double quotes are needed
password="1234isabadpassword"

# The link for the discord button on the home page. Double quotes are needed
INVITE_URL="https://discord.gg"

# The link for the chatbox. Double quotes are needed
CHATBOX_URL="https://widgetbot.io"
```

## Changelog
View the changelog/roadmap [here](https://github.com/IDontCodee/sussy/blob/main/e/CHANGELOG.md)

## License
sussy uses the MIT license.

## It's a meme at this point

```json
{
    "title": "Retro - Coming Soon!",
    "image": "https://avatars.githubusercontent.com/u/87547936",
    "location": "/"
}
```
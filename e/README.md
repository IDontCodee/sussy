# STOP!

Editing index.mjs is NOT HOW you configure this! You should use ENV variables

The variables to config are:



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
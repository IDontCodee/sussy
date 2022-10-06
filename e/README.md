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

For Heroku, edit config vars from your app’s `Settings` tab in the [Heroku Dashboard](https://dashboard.heroku.com/).

Image from Heroku's docs:

![Config Vars in Dashboard](https://devcenter1.assets.heroku.com/article-images/321-imported-1443570183-321-imported-1443554644-389-original.jpg)

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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import createBareServer from '@tomphttp/bare-server-node';
import { readFileSync } from 'node:fs';
import express from 'express';
import { expressMiddleware } from '@apollo/server/dist/esm/express4';
import { ApolloServer } from '@apollo/server';

const setupProxy = {
  name: 'setup-proxy-plugin',
  async configureServer(server) {
    const bareServer = createBareServer("/not-sus-server/");

    server.middlewares.use((req, res, next) => {
      if(bareServer.shouldRoute(req)) bareServer.routeRequest(req, res); else next();
    })

    server.middlewares.use(express.static("./static"));

    let typeDefs = readFileSync("./typeDefs.graphql", { encoding: "utf8" });

    let GSJson = JSON.parse(readFileSync("./json/games.json", { encoding: "utf8" }));
    let AppJson = JSON.parse(readFileSync("./json/apps.json", { encoding: "utf8" }));

    const gqlServer = new ApolloServer({
      typeDefs,
      resolvers: {
        Query: {
          GSData: () => GSJson,
          AppData: () => AppJson,
          URIconfig: () => {
            return {
              DC: process.env['INVITE_URL'] || "https://example.com",
              WD: process.env['CHATBOX_URL'] || "example.com"
            }
          }
        }
      }
    });
    await gqlServer.start();

    const app = express();
    app.use(express.json(), expressMiddleware(gqlServer));
    server.middlewares.use("/graphql", app);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    setupProxy
  ],
})

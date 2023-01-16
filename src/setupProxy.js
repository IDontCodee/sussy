const createBareServer = require("@tomphttp/bare-server-node");
const { readFileSync } = require('node:fs');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { json } = require('express');

/**
 *
 * @param {import('express').Express} app
 */
async function setupProxy(app) {
  const bareServer = createBareServer("/not-sus-server/");
  var middleware;

  app.use((req, res, next) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeRequest(req, res);
    } else next();
  });

  app.use(json());
  
  app.use('/graphql', (req, res, next) => {
    return middleware(req, res, next);
  });

  let typeDefs = readFileSync("./typeDefs.graphql", { encoding: "utf8" }); 
  let GSJson = require("../json/games.json");
  let AppJson = require("../json/apps.json");
  const server = new ApolloServer({
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
  await server.start();
  middleware = expressMiddleware(server);
}
module.exports = setupProxy;
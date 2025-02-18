import { dirname, join } from 'path';
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { fileURLToPath } from 'url';

import { buildSchema } from 'graphql';
import resolvers from './graphql/resolvers/index.js';
import context from './graphql/context/context.js';

import { getFilesByExtension } from './helpers/files.js';
import { readSchemaFiles } from './helpers/schema.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirSchenas = join(__dirname, './graphql/schemas/');
const schemaFiles = getFilesByExtension(dirSchenas, /\.schema/);
const schemaContent = readSchemaFiles(schemaFiles); 
const typeDefs = buildSchema(schemaContent);

const app = express();
app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
});

const { url } = await startStandaloneServer(apolloServer);
console.log(`🚀 Graphql Server ready at ${url}`);

const port = process.env.PORT || 4001;
const server = createServer(app);

process.on('uncaughtException', (err) => {
  console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on('SIGINT', (err) => {
  console.error(`${(new Date()).toUTCString()} SIGINT:`, err);
  process.exit(0);
});

process.on('SIGTERM', (err) => {
  console.error(`${(new Date()).toUTCString()} SIGTERM:`, err);
  process.exit(0);
});

process.on('ELIFECYCLE', (err) => {
  console.error(`${(new Date()).toUTCString()} ELIFECYCLE:`, err);
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
});

server.listen({ port }, () => console.log(
  `🚀 Express Server ready at http://localhost:${port}/`,
));
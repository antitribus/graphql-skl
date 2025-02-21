import { dirname, join } from 'path';
import express from 'express';
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

app.get('/*', (req, res) => {
  res.status(200).send('ok');
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
});

const { url } = await startStandaloneServer(apolloServer);
console.log(`🚀 Graphql Server ready`);

app.listen({ port: 4001 }, () => console.log(
  `🚀 Express Server ready`,
));
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'ngoyx43u',

  dataset: 'production',

  title: 'My Personal Website',

  apiVersion: '2023-06-30',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  }
});

export default config;

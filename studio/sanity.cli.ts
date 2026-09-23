import {defineCliConfig} from 'sanity/cli'

import {dataset, projectId} from './env'

export default defineCliConfig({
  api: {projectId, dataset},
  deployment: {appId: 'o624q3q2ma6u0bvaf0amifqq'},
  typegen: {
    enabled: true,
    // Queries live in the Next.js app one level up.
    path: '../{app,components,lib,sanity}/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
})

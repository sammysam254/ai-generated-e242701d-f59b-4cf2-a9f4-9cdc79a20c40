import { createNextConfig } from 'next/dist/server/config-shared';
import withTM from 'next-transpile-modules';

export default withTM({
  ...createNextConfig({
    experimental: {
      appDir: true,
    },
  }),
  transpileModules: ['@supabase/supabase-js'],
});
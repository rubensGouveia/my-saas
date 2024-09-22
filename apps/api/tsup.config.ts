import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  splitting: false,
  sourcemap: true,
  noExternal:["@saas/auth","@saas/env"],
  clean: true,
})

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  use: {
    // Dedicated port so `pnpm storybook` on 6006 cannot mask a broken static build.
    baseURL: 'http://127.0.0.1:6007',
    trace: 'on-first-retry',
  },
  webServer: {
    command:
      'pnpm build-storybook && npx --yes http-server storybook-static -p 6007 -c-1',
    url: 'http://127.0.0.1:6007',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});

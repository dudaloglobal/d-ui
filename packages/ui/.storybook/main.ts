import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig & { title: string } = {
  title: 'Dudalo Design System',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['./public'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  features: {
    backgrounds: false,
    sidebarOnboardingChecklist: false,
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};

export default config;

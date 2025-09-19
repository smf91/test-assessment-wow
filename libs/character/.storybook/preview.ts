import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import type { Preview } from '@storybook/angular';

// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../design-tokens/src/lib/tokens.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (story, context): StoryFnAngularReturnType => {
      const theme = context.globals['theme'] || 'dark';
      document.body.setAttribute('data-theme', theme);
      return story();
    },
  ],
};

export default preview;

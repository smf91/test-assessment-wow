import type { Meta, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';

// eslint-disable-next-line @nx/enforce-module-boundaries
import CharacterMockData from '../../../../../moks/character.json';

import { CharacterViewerComponent } from './character-viewer.component';

const meta: Meta<CharacterViewerComponent> = {
  title: 'Character/CharacterViewer',
  component: CharacterViewerComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CharacterViewerComponent>;

export const Default: Story = {
  args: {
    character: CharacterMockData,
  },
  decorators: [
    (story): StoryFnAngularReturnType => ({
      template: `<div style="width: 400px; height: 267px;">
                   <lib-character-viewer [character]="character"></lib-character-viewer>
                 </div>`,
      props: story().props,
    }),
  ],
};

import type { Meta, StoryObj } from '@storybook/angular';
import { CharacterViewerComponent } from './character-viewer.component';
import CharacterMockData from '../../assets/character2.json';

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
    (story) => ({
      template: `<div style="width: 400px; height: 600px;">
                   <app-character-viewer [character]="character"></app-character-viewer>
                 </div>`,
      props: story().props,
    }),
  ],
};

import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';

import { GearSlotComponent } from './gear-slot.component';
import { EquipmentSlotEnum, GearSlot, ItemData } from './gear-slot.model';

const meta: Meta<GearSlotComponent> = {
  title: 'UI/GearSlot',
  component: GearSlotComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<GearSlotComponent>;

const exampleItem: ItemData = {
  id: 40510,
  name: 'Helm of Trolls',
  quality: 3,
  ilvl: 200,
  icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_11.jpg',
  stats: {
    Strength: 20,
    Stamina: 15,
  },
};

const selectedSlot = signal<GearSlot | null>(null);

export const WithItem: Story = {
  args: {
    slot: {
      type: EquipmentSlotEnum.HEAD,
      item: exampleItem,
    },
    selectedSlot: selectedSlot(),
  },
};

export const EmptySlot: Story = {
  args: {
    slot: {
      type: EquipmentSlotEnum.CHEST,
    },
    selectedSlot: selectedSlot(),
  },
};

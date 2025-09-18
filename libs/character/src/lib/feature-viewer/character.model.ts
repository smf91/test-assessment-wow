import { EquipmentSlotEnum } from '@wow/ui';

export interface Item {
  id: number;
  enchant?: number;
  gems?: number[];
}

export type Items = {
  [K in EquipmentSlotEnum]?: Item;
};

export interface Appearance {
  skin: number;
  face: number;
  hair: number;
  hairColor: number;
  features: number;
}

export interface Character {
  name: string;
  race: number;
  gender: number;
  class: string;
  appearance: Appearance;
  items: Items;
}

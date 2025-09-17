export enum EquipmentSlotEnum {
  HEAD = 'HEAD',
  NECK = 'NECK',
  SHOULDER = 'SHOULDER',
  BACK = 'BACK',
  CHEST = 'CHEST',
  WRIST = 'WRIST',
  HANDS = 'HANDS',
  WAIST = 'WAIST',
  LEGS = 'LEGS',
  FEET = 'FEET',
  FINGER1 = 'FINGER1',
  FINGER2 = 'FINGER2',
  TRINKET1 = 'TRINKET1',
  TRINKET2 = 'TRINKET2',
  MAINHAND = 'MAINHAND',
  OFFHAND = 'OFFHAND',
  RANGED = 'RANGED',
}

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

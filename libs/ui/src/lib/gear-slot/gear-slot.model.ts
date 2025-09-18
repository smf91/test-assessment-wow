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
  FINGER_1 = 'FINGER1',
  FINGER_2 = 'FINGER2',
  TRINKET_1 = 'TRINKET1',
  TRINKET_2 = 'TRINKET2',
  MAIN_HAND = 'MAINHAND',
  OFF_HAND = 'OFFHAND',
  RANGED = 'RANGED',
  SHIRT = 'SHIRT',
  TABARD = 'TABARD',
  RELIC = 'RELIC',
}

export interface ItemData {
  id: number;
  name: string;
  quality: number;
  ilvl: number;
  icon: string;
  stats?: Record<string, number>;
}

export interface GearSlot {
  type: EquipmentSlotEnum;
  item?: ItemData;
}

export interface GearSlotMeta {
  type: EquipmentSlotEnum;
  label: string;
  emptyIcon: string;
  id: number;
}

export const GearSlots: Record<EquipmentSlotEnum, GearSlotMeta> = {
  HEAD: {
    type: EquipmentSlotEnum.HEAD,
    label: 'Head',
    emptyIcon: '/gear-slot/inventoryslot_head.jpg',
    id: 1,
  },
  NECK: {
    type: EquipmentSlotEnum.NECK,
    label: 'Neck',
    emptyIcon: '/gear-slot/inventoryslot_neck.jpg',
    id: 2,
  },
  SHOULDER: {
    type: EquipmentSlotEnum.SHOULDER,
    label: 'Shoulder',
    emptyIcon: '/gear-slot/inventoryslot_shoulder.jpg',
    id: 3,
  },
  SHIRT: {
    type: EquipmentSlotEnum.SHIRT,
    label: 'Shirt',
    emptyIcon: '/gear-slot/inventoryslot_shirt.jpg',
    id: 16,
  },
  CHEST: {
    type: EquipmentSlotEnum.CHEST,
    label: 'Chest',
    emptyIcon: '/gear-slot/inventoryslot_chest.jpg',
    id: 5,
  },
  WAIST: {
    type: EquipmentSlotEnum.WAIST,
    label: 'Waist',
    emptyIcon: '/gear-slot/inventoryslot_waist.jpg',
    id: 6,
  },
  LEGS: {
    type: EquipmentSlotEnum.LEGS,
    label: 'Legs',
    emptyIcon: '/gear-slot/inventoryslot_legs.jpg',
    id: 7,
  },
  FEET: {
    type: EquipmentSlotEnum.FEET,
    label: 'Feet',
    emptyIcon: '/gear-slot/inventoryslot_feet.jpg',
    id: 8,
  },
  WRIST: {
    type: EquipmentSlotEnum.WRIST,
    label: 'Wrists',
    emptyIcon: '/gear-slot/inventoryslot_wrists.jpg',
    id: 9,
  },
  HANDS: {
    type: EquipmentSlotEnum.HANDS,
    label: 'Hands',
    emptyIcon: '/gear-slot/inventoryslot_hands.jpg',
    id: 10,
  },
  FINGER1: {
    type: EquipmentSlotEnum.FINGER_1,
    label: 'Finger',
    emptyIcon: '/gear-slot/inventoryslot_finger.jpg',
    id: 11,
  },
  FINGER2: {
    type: EquipmentSlotEnum.FINGER_2,
    label: 'Finger',
    emptyIcon: '/gear-slot/inventoryslot_finger.jpg',
    id: 11,
  },
  TRINKET1: {
    type: EquipmentSlotEnum.TRINKET_1,
    label: 'Trinket',
    emptyIcon: '/gear-slot/inventoryslot_trinket.jpg',
    id: 12,
  },
  TRINKET2: {
    type: EquipmentSlotEnum.TRINKET_2,
    label: 'Trinket',
    emptyIcon: '/gear-slot/inventoryslot_trinket.jpg',
    id: 12,
  },
  BACK: {
    type: EquipmentSlotEnum.BACK,
    label: 'Back',
    emptyIcon: '/gear-slot/inventoryslot_shirt.jpg',
    id: 15,
  },
  MAINHAND: {
    type: EquipmentSlotEnum.MAIN_HAND,
    label: 'Main Hand',
    emptyIcon: '/gear-slot/inventoryslot_mainhand.jpg',
    id: 21,
  },
  OFFHAND: {
    type: EquipmentSlotEnum.OFF_HAND,
    label: 'Offhand',
    emptyIcon: '/gear-slot/inventoryslot_offhand.jpg',
    id: 22,
  },
  RANGED: {
    type: EquipmentSlotEnum.RANGED,
    label: 'Ranged',
    emptyIcon: '/gear-slot/inventoryslot_offhand.jpg',
    id: 17,
  },
  TABARD: {
    type: EquipmentSlotEnum.TABARD,
    label: 'Tabard',
    emptyIcon: '',
    id: 19,
  },
  RELIC: {
    type: EquipmentSlotEnum.RELIC,
    label: 'Relic',
    emptyIcon: '',
    id: NaN,
  },
};

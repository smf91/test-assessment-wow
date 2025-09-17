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
}

export const GearSlots: Record<EquipmentSlotEnum, GearSlotMeta> = {
  HEAD: {
    type: EquipmentSlotEnum.HEAD,
    label: 'Head',
    emptyIcon: '/gear-slot/inventoryslot_head.jpg',
  },
  NECK: {
    type: EquipmentSlotEnum.NECK,
    label: 'Neck',
    emptyIcon: '/gear-slot/inventoryslot_neck.jpg',
  },
  SHOULDER: {
    type: EquipmentSlotEnum.SHOULDER,
    label: 'Shoulder',
    emptyIcon: '/gear-slot/inventoryslot_shoulder.jpg',
  },
  BACK: {
    type: EquipmentSlotEnum.BACK,
    label: 'Back',
    emptyIcon: '/gear-slot/inventoryslot_shirt.jpg',
  },
  CHEST: {
    type: EquipmentSlotEnum.CHEST,
    label: 'Chest',
    emptyIcon: '/gear-slot/inventoryslot_chest.jpg',
  },
  WRIST: {
    type: EquipmentSlotEnum.WRIST,
    label: 'Wrists',
    emptyIcon: '/gear-slot/inventoryslot_wrists.jpg',
  },
  HANDS: {
    type: EquipmentSlotEnum.HANDS,
    label: 'Hands',
    emptyIcon: '/gear-slot/inventoryslot_hands.jpg',
  },
  WAIST: {
    type: EquipmentSlotEnum.WAIST,
    label: 'Waist',
    emptyIcon: '/gear-slot/inventoryslot_waist.jpg',
  },
  LEGS: {
    type: EquipmentSlotEnum.LEGS,
    label: 'Legs',
    emptyIcon: '/gear-slot/inventoryslot_legs.jpg',
  },
  FEET: {
    type: EquipmentSlotEnum.FEET,
    label: 'Feet',
    emptyIcon: '/gear-slot/inventoryslot_feet.jpg',
  },
  FINGER1: {
    type: EquipmentSlotEnum.FINGER1,
    label: 'Finger',
    emptyIcon: '/gear-slot/inventoryslot_finger.jpg',
  },
  FINGER2: {
    type: EquipmentSlotEnum.FINGER2,
    label: 'Finger',
    emptyIcon: '/gear-slot/inventoryslot_finger.jpg',
  },
  TRINKET1: {
    type: EquipmentSlotEnum.TRINKET1,
    label: 'Trinket',
    emptyIcon: '/gear-slot/inventoryslot_trinket.jpg',
  },
  TRINKET2: {
    type: EquipmentSlotEnum.TRINKET2,
    label: 'Trinket',
    emptyIcon: '/gear-slot/inventoryslot_trinket.jpg',
  },
  MAINHAND: {
    type: EquipmentSlotEnum.MAINHAND,
    label: 'Main Hand',
    emptyIcon: '/gear-slot/inventoryslot_mainhand.jpg',
  },
  OFFHAND: {
    type: EquipmentSlotEnum.OFFHAND,
    label: 'Offhand',
    emptyIcon: '/gear-slot/inventoryslot_offhand.jpg',
  },
  RANGED: {
    type: EquipmentSlotEnum.RANGED,
    label: 'Ranged',
    emptyIcon: '/gear-slot/inventoryslot_offhand.jpg',
  },
};

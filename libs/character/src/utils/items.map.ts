import { EquipmentSlotEnum, Items } from '../models';

const slotMap: Record<EquipmentSlotEnum, number> = {
  [EquipmentSlotEnum.HEAD]: 1,
  [EquipmentSlotEnum.NECK]: 2,
  [EquipmentSlotEnum.SHOULDER]: 3,
  [EquipmentSlotEnum.BACK]: 4,
  [EquipmentSlotEnum.CHEST]: 5,
  [EquipmentSlotEnum.WRIST]: 6,
  [EquipmentSlotEnum.HANDS]: 7,
  [EquipmentSlotEnum.WAIST]: 8,
  [EquipmentSlotEnum.LEGS]: 9,
  [EquipmentSlotEnum.FEET]: 10,
  [EquipmentSlotEnum.FINGER1]: 11,
  [EquipmentSlotEnum.FINGER2]: 12,
  [EquipmentSlotEnum.TRINKET1]: 13,
  [EquipmentSlotEnum.TRINKET2]: 14,
  [EquipmentSlotEnum.MAINHAND]: 15,
  [EquipmentSlotEnum.OFFHAND]: 16,
  [EquipmentSlotEnum.RANGED]: 17,
};

export function convertItems(items: Items): number[][] {
  return (Object.keys(items) as EquipmentSlotEnum[])
    .map((slot) => {
      const item = items[slot];
      if (!item) return null;
      return [slotMap[slot], item.id];
    })
    .filter((entry): entry is number[] => entry !== null);
}

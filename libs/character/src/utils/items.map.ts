import { EquipmentSlotEnum, slotMap } from '@wow/ui';
import { Items } from '../models';

export function convertItems(items: Items): number[][] {
  return (Object.keys(items) as EquipmentSlotEnum[])
    .map((slot) => {
      const item = items[slot];
      if (!item) return null;
      return [slotMap[slot], item.id];
    })
    .filter((entry): entry is number[] => entry !== null);
}

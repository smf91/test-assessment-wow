import { EquipmentSlotEnum, GearSlots } from '@wow/ui';
import { Items } from '../lib/feature-viewer';

export function convertItems(items: Items): number[][] {
  return (Object.keys(items) as EquipmentSlotEnum[])
    .map((slot) => {
      const item = items[slot];
      if (!item) return null;
      return [GearSlots[slot].id, item.id];
    })
    .filter((entry): entry is number[] => entry !== null);
}

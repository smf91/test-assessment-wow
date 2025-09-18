import { Character, Items } from '@wow/character';
import { GearSlot, EquipmentSlotEnum, GearSlots, ItemData } from '@wow/ui';

export function mapCharacterItemsToGearSlots(character: Character): GearSlot[] {
  const slots: GearSlot[] = Object.values(EquipmentSlotEnum).map((slot) => {
    const item = character.items[slot as EquipmentSlotEnum];
    return {
      type: slot as EquipmentSlotEnum,
      item: item ? mockItemData(item) : undefined,
    };
  });

  return slots;
}

function mockItemData(item: { id: number }): ItemData {
  return {
    id: item.id,
    name: `Item #${item.id}`,
    quality: 1,
    ilvl: 0,
    icon: GearSlots[EquipmentSlotEnum.HEAD].emptyIcon,
  };
}

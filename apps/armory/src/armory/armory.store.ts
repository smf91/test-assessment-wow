import { inject, signal, effect, computed, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs';
import { Character } from '@wow/character';
import { EquipmentSlotEnum, GearSlot } from '@wow/ui';

import { mapCharacterItemsToGearSlots } from './gear-mapper';

export class ArmoryStore {
  private readonly _leftSlots = [
    EquipmentSlotEnum.HEAD,
    EquipmentSlotEnum.NECK,
    EquipmentSlotEnum.SHOULDER,
    EquipmentSlotEnum.BACK,
    EquipmentSlotEnum.CHEST,
    EquipmentSlotEnum.SHIRT,
    EquipmentSlotEnum.TABARD,
    EquipmentSlotEnum.WRIST,
  ];

  private readonly _rightSlots = [
    EquipmentSlotEnum.HANDS,
    EquipmentSlotEnum.WAIST,
    EquipmentSlotEnum.LEGS,
    EquipmentSlotEnum.FEET,
    EquipmentSlotEnum.FINGER_1,
    EquipmentSlotEnum.FINGER_2,
    EquipmentSlotEnum.TRINKET_1,
    EquipmentSlotEnum.TRINKET_2,
  ];

  private readonly _bottomSlots = [
    EquipmentSlotEnum.MAIN_HAND,
    EquipmentSlotEnum.OFF_HAND,
    EquipmentSlotEnum.RANGED,
    EquipmentSlotEnum.RELIC,
  ];
  private readonly _http = inject(HttpClient);

  readonly character = signal<Character | null>(null);

  readonly allGear = computed<GearSlot[]>(() =>
    this.character()
      ? mapCharacterItemsToGearSlots(this.character() as Character)
      : []
  );

  get leftGears(): Signal<GearSlot[]> {
    return computed(() =>
      this.allGear().filter((g) => this._leftSlots.includes(g.type))
    );
  }
  get rightGears(): Signal<GearSlot[]> {
    return computed(() =>
      this.allGear().filter((g) => this._rightSlots.includes(g.type))
    );
  }
  get bottomGears(): Signal<GearSlot[]> {
    return computed(() =>
      this.allGear().filter((g) => this._bottomSlots.includes(g.type))
    );
  }

  loadGear(): void {
    //INFO  заглушка
    const url = '/api/getCharacter';
    this._http
      .get<Character>(url)
      .pipe(
        delay(1500),
        tap((data) => {
          this.character.set(data);
        })
      )
      .subscribe();
  }
}

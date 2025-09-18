import { inject, signal, effect, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, Items } from '@wow/character';
import { delay, tap } from 'rxjs';
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
    this.character() ? mapCharacterItemsToGearSlots(this.character()!) : []
  );

  get leftGears() {
    return computed(() =>
      this.allGear().filter((g) => this._leftSlots.includes(g.type))
    );
  }
  get rightGears() {
    return computed(() =>
      this.allGear().filter((g) => this._rightSlots.includes(g.type))
    );
  }
  get bottomGears() {
    return computed(() =>
      this.allGear().filter((g) => this._bottomSlots.includes(g.type))
    );
  }

  constructor() {
    effect(() => {
      console.log('character updated:', this.character());
      console.log('items updated:', this.allGear());
    });
  }

  async loadGear(characterId?: string) {
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

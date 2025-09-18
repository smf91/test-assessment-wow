import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterViewerComponent } from '@wow/character';
import { GearSlotComponent } from '@wow/ui';
import { ArmoryStore } from './armory.store';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-armory',
  templateUrl: 'armory.component.html',
  styleUrls: ['armory.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CharacterViewerComponent,
    GearSlotComponent,
  ],
  providers: [ArmoryStore],
})
export class ArmoryComponent {
  readonly store = inject(ArmoryStore);

  constructor() {
    this.store.loadGear();
  }
}

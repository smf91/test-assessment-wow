import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from '../tooltip';

import { GearSlot, GearSlots } from './gear-slot.model';

@Component({
  selector: 'lib-gear-slot',
  templateUrl: './gear-slot.component.html',
  styleUrls: ['./gear-slot.component.scss'],
  standalone: true,
  imports: [CommonModule, TooltipComponent],
})
export class GearSlotComponent {
  @Input() slot: GearSlot | null = null;
  @Input() selectedSlot?: GearSlot;

  hovered = signal(false);

  onHover = (): void => this.hovered.set(true);
  onLeave = (): void => this.hovered.set(false);

  showTooltip = (): boolean => this.hovered();
  isSelected = (): boolean => this.selectedSlot === this.slot;

  emptySlotIcon(): string {
    if (!this.slot) return 'NULL';
    return GearSlots[this.slot.type].emptyIcon;
  }
}

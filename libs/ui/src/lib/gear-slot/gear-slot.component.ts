import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearSlot, GearSlots } from './gear-slot.model';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-gear-slot',
  templateUrl: './gear-slot.component.html',
  styleUrls: ['./gear-slot.component.scss'],
  standalone: true,
  imports: [CommonModule, TooltipComponent],
})
export class GearSlotComponent {
  @Input() slot: GearSlot | null = null;
  @Input() selectedSlot?: GearSlot;

  hovered = signal(false);

  onHover = () => this.hovered.set(true);
  onLeave = () => this.hovered.set(false);

  showTooltip = () => this.hovered();
  isSelected = () => this.selectedSlot === this.slot;

  emptySlotIcon(): string {
    if (!this.slot) return 'NULL';
    return GearSlots[this.slot.type].emptyIcon;
  }
}

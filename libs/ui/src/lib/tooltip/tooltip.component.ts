import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearSlot, ItemData } from '../gear-slot/gear-slot.model';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
  @Input() slot!: GearSlot;

  itemStats = computed(() =>
    this.slot?.item?.stats
      ? Object.entries(this.slot.item.stats).map(([key, value]) => ({
          key,
          value,
        }))
      : []
  );

  qualityColor(quality: number) {
    switch (quality) {
      case 0:
        return '#9d9d9d';
      case 1:
        return '#1eff00';
      case 2:
        return '#0070dd';
      case 3:
        return '#a335ee';
      default:
        return '#fff';
    }
  }
}

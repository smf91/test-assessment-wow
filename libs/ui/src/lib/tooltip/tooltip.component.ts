import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GearSlot, ItemData } from '../gear-slot/gear-slot.model';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  standalone: true,
  imports: [CommonModule],
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
    const map: Record<number, string> = {
      0: 'var(--color-common)',
      1: 'var(--color-uncommon)',
      2: 'var(--color-rare)',
      3: 'var(--color-epic)',
      4: 'var(--color-legendary)',
    };
    return map[quality] ?? 'var(--color-text)';
  }
}

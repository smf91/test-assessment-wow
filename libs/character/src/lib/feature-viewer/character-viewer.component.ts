import { generateModels } from 'wow-model-viewer';
import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  ElementRef,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { Character } from '../../models';
import { convertItems } from '../../utils';

@Component({
  selector: 'app-character-viewer',
  template: `<div id="model3d"></div>`,
  standalone: true,
})
export class CharacterViewerComponent implements AfterViewInit, OnChanges {
  @Input() character: Character | null = null;

  @ViewChild('model3d', { static: true })
  container!: ElementRef<HTMLDivElement>;

  private _modelScale = 1.5;
  private _viewInitialized = false;

  ngAfterViewInit(): void {
    this._viewInitialized = true;
    this.loadCharacter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._viewInitialized && changes['character'] && this.character) {
      this.loadCharacter();
    }
  }

  private async loadCharacter(): Promise<void> {
    if (!this.character) return;
    const { appearance, items, race, gender } = this.character;
    const mappedItems = convertItems(items);
    await generateModels(this._modelScale, '#model3d', {
      race,
      gender,
      ...appearance,
      items: mappedItems,
    });
  }
}

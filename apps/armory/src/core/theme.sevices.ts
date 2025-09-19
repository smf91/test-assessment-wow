import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  current = signal<Theme>('dark');

  setTheme(theme: Theme): void {
    this.current.set(theme);
    document.body.setAttribute('data-theme', theme);
  }
}

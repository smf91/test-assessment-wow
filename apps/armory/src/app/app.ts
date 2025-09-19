import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArmoryComponent } from '../armory';
import { ThemeService } from '../core';

@Component({
  imports: [ArmoryComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public theme = inject(ThemeService);
}

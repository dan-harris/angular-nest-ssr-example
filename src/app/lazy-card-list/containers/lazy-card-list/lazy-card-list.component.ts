import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lazy-card-list',
  template: `
        <!-- action buttons -->
        <div class="app--buttons">
          <button (click)="onClick()">Load</button>
        </div>

        <!-- emoji cards -->
        <div class="app--emojis">
          <ng-container *ngIf="loadCardComponents">
            <app-card-emoji emoji="🧐" emojiDescription="Monocle"></app-card-emoji>
            <app-card-emoji emoji="🤔" emojiDescription="Thinking"></app-card-emoji>
            <app-card-emoji emoji="🤣" emojiDescription="Laughing"></app-card-emoji>
          </ng-container>
          <ng-container *ngIf="!loadCardComponents">
            <app-placeholder-emoji [isLoading]="loadCardComponents"></app-placeholder-emoji>
            <app-placeholder-emoji [isLoading]="loadCardComponents"></app-placeholder-emoji>
            <app-placeholder-emoji [isLoading]="loadCardComponents"></app-placeholder-emoji>
          </ng-container>
        </div>
  `,
  styles: [`
    /* layout containers */
    .app--container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .app--container--inner {
      display: flex;
      flex-direction: column;
    }
    .app--buttons {

    }
    .app--emojis {
      display: flex;
      margin-top: 1rem;
    }
  `]
})
export class LazyCardListComponent {

  // flags to load components
  loadCardComponents: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    // ensure server doesnt prerender cards (mimics dynamic content)
    if (isPlatformBrowser(this.platformId)) { setTimeout(() => this.loadCardComponents = true, 2000) }
  }

  onClick(): void {
    this.loadCardComponents = !this.loadCardComponents;
  }

}

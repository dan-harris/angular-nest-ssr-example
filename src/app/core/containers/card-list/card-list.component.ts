import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-card-list',
    template: `
        <!-- action buttons -->
        <div class="app--buttons">
          <button (click)="onClick()">Load</button>
        </div>

        <!-- emoji cards -->
        <div class="app--emojis">
          <ng-container *ngIf="loadCardComponents">
            <app-card-emoji emoji="🤩" emojiDescription="Star Struck"></app-card-emoji>
            <app-card-emoji emoji="🤔" emojiDescription="Thinking"></app-card-emoji>
            <app-card-emoji emoji="🙃" emojiDescription="Upside Down"></app-card-emoji>
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
    .app--emojis {
      display: flex;
      margin-top: 1rem;
    }
  `]
})
export class CardListComponent {

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

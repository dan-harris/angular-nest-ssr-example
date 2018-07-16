import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="app--container">
      <!-- content container -->
      <div class="app--container--inner">

        <!-- action buttons -->
        <div class="app--buttons">
          <button routerLink="/list">CARD LIST</button>
          <button routerLink="/list-lazy">LAZY CARD LIST</button>
        </div>

        <router-outlet></router-outlet>

      </div>
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
      display: flex;
    }
  `]
})
export class AppComponent { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { PlaceholderEmojiComponent } from "./components/placeholder-emoji/placeholder-emoji.component";
import { CardEmojiComponent } from "./components/card-emoji/card-emoji.component";
// containers

@NgModule({
    declarations: [
        // components
        PlaceholderEmojiComponent,
        CardEmojiComponent,
        // containers
    ],
    imports: [
        // angular default modules
        CommonModule,
        RouterModule
    ],
    exports: [
        // components
        PlaceholderEmojiComponent,
        CardEmojiComponent,
        // containers
        // angular default modules
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// app modules
import { SharedModule } from '../shared/shared.module';

// components
// containers
import { AppComponent } from './containers/app/app.component';
import { CardListComponent } from './containers/card-list/card-list.component'

@NgModule({
    declarations: [
        // components
        // containers
        AppComponent,
        CardListComponent
    ],
    imports: [
        // app shared module
        SharedModule
    ],
    exports: [
        AppComponent
    ]
})
export class CoreModule { }

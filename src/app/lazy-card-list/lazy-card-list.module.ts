import { NgModule } from '@angular/core';

// app modules
import { SharedModule } from '../shared/shared.module';

// feature routes
import { LazyCardListRoutingModule } from './lazy-card-list.module.routes';

// components
// containers
import { LazyCardListComponent } from './containers/lazy-card-list/lazy-card-list.component';

@NgModule({
    declarations: [
        // components
        // containers
        LazyCardListComponent
    ],
    imports: [
        // app shared module
        SharedModule,
        // routes
        LazyCardListRoutingModule
    ]
})
export class LazyCardListModule { }

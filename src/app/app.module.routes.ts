import { Routes } from '@angular/router';

// app level containers
import { CardListComponent } from './core/containers/card-list/card-list.component';


export const routes: Routes = [
    {
        path: 'list',
        component: CardListComponent
    },
    {
        path: 'list-lazy',
        loadChildren: './lazy-card-list/lazy-card-list.module#LazyCardListModule'
    }
];

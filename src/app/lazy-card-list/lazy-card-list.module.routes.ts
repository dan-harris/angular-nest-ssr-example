import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// app level containers
import { LazyCardListComponent } from "./containers/lazy-card-list/lazy-card-list.component";

export const routes: Routes = [
    {
        path: '',
        component: LazyCardListComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyCardListRoutingModule { }
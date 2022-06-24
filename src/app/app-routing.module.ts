import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardRuoutingModule } from "./modules/dashboard/dashboard-routing.module";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {enableTracing: false, useHash: true}
    ),
    DashboardRuoutingModule
],
    exports: [RouterModule]
})

export class AppRoutingModule {}

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'project', loadChildren: '../appProject/modules/project.module#ProjectModule'
    }
];
export const AppRoutes: ModuleWithProviders  = RouterModule.forRoot(routes);
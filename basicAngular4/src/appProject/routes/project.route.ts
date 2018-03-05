import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from '../components/project.component';

const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    { path: 'project', component: ProjectComponent }
];


export const ProjectRoute: ModuleWithProviders = RouterModule.forChild(routes);
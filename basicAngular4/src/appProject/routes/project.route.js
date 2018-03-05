import { RouterModule } from '@angular/router';
import { ProjectComponent } from '../components/project.component';
var routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    { path: 'project', component: ProjectComponent }
];
export var ProjectRoute = RouterModule.forChild(routes);
//# sourceMappingURL=project.route.js.map
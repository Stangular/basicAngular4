import { RouterModule } from '@angular/router';
export var routes = [
    {
        path: 'project', loadChildren: '../appProject/modules/project.module#ProjectModule'
    }
];
export var AppRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map
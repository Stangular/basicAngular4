var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ngMaterialModule } from '../../ui/module/ngMaterialUI.module';
import { ProjectComponent } from '../components/project.component';
import { ProjectRoute } from '../routes/project.route';
import { FormInputElementComponent } from '../../ui/components/edit/form-input.component';
import { DataHTTPService } from '../../dataManagement/service/dataHTTP.service';
import { ProjectService } from '../services/project/project.service';
var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                ngMaterialModule,
                ProjectRoute
            ],
            declarations: [
                ProjectComponent,
                FormInputElementComponent
            ],
            providers: [DataHTTPService,
                ProjectService],
            exports: [ngMaterialModule]
        })
    ], ProjectModule);
    return ProjectModule;
}());
export { ProjectModule };
//# sourceMappingURL=project.module.js.map
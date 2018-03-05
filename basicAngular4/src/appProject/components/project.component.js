var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
var ProjectComponent = (function () {
    function ProjectComponent(projectService) {
        this.projectService = projectService;
        this.elements = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.InitForm();
    };
    ProjectComponent.prototype.getElement = function (elementID) {
        return this.elements.find(function (e) { return e.FieldID() === elementID; }) || {};
    };
    ProjectComponent.prototype.InitForm = function () {
        console.error('InitForm');
        this.elements = this.projectService.Content.GetFormDefinition();
        console.error('2');
        this.form = this.projectService.Content.Form;
        console.error('3');
        this.projectService.Init();
        return this.form;
    };
    ProjectComponent = __decorate([
        Component({
            selector: 'project-item',
            templateUrl: './project.component.html'
        }),
        __metadata("design:paramtypes", [ProjectService])
    ], ProjectComponent);
    return ProjectComponent;
}());
export { ProjectComponent };
//# sourceMappingURL=project.component.js.map
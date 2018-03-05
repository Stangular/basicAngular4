var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ProjectRecords } from './project.model';
import { DataHTTPService } from '../../../dataManagement/service/dataHTTP.service';
var ProjectService = (function () {
    function ProjectService(dataService) {
        this.dataService = dataService;
    }
    Object.defineProperty(ProjectService.prototype, "Content", {
        get: function () {
            if (null == this._project) {
                this._project = new ProjectRecords('projectForm');
            }
            return this._project;
        },
        enumerable: true,
        configurable: true
    });
    ProjectService.prototype.contentSuccess = function (data) {
        console.error('sss');
    };
    ProjectService.prototype.contentFail = function (data) {
    };
    ProjectService.prototype.Init = function () {
        var _this = this;
        var p = 'http://localhost:52462/api/data/111';
        console.error(p);
        this.dataService.getContent(p).subscribe(function (data) { return _this.contentSuccess(data); }, function (err) { return _this.contentFail(err); });
    };
    ProjectService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DataHTTPService])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map
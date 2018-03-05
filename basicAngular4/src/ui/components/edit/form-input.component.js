var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var FormInputElementComponent = (function () {
    function FormInputElementComponent() {
        this.actionClass = '';
        this.action = new EventEmitter();
    }
    FormInputElementComponent.prototype.onAction = function (value) {
        this.action.emit(this.actionClass);
    };
    FormInputElementComponent.prototype.ngOnInit = function () {
    };
    FormInputElementComponent.prototype.Init = function () {
    };
    Object.defineProperty(FormInputElementComponent.prototype, "isValid", {
        get: function () {
            var v = this.form.controls[this.element.FieldID()].value;
            var valid = this.element.validateValue(v);
            return valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormInputElementComponent.prototype, "element", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], FormInputElementComponent.prototype, "form", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormInputElementComponent.prototype, "actionClass", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FormInputElementComponent.prototype, "action", void 0);
    FormInputElementComponent = __decorate([
        Component({
            selector: 'input-edit',
            templateUrl: 'form-input.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], FormInputElementComponent);
    return FormInputElementComponent;
}());
export { FormInputElementComponent };
//# sourceMappingURL=form-input.component.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Records } from '../../../dataManagement/model/records';
import { BaseField } from '../../../dataManagement/model/field';
import { EditElementDefinition } from '../../../dataManagement/model/definitions/elementDefinition';
var ProjectRecords = (function (_super) {
    __extends(ProjectRecords, _super);
    function ProjectRecords(formName, fields) {
        if (fields === void 0) { fields = []; }
        return _super.call(this, formName, fields) || this;
    }
    ProjectRecords.prototype.GetFormDefinition = function () {
        console.error('GetFormDefinition');
        if (this._UIElements.length <= 0) {
            var elm = new EditElementDefinition('projectForm', 'name', true, 'Shannon');
            this._UIElements.push(elm);
        }
        return this._UIElements;
    };
    ProjectRecords.prototype.UpdateDependentUI = function () {
    };
    ProjectRecords.prototype.GetUIValue = function (fieldID) {
        return this._form.controls[fieldID].value;
    };
    ProjectRecords.prototype.New = function (data) {
        return new BaseField(data);
    };
    return ProjectRecords;
}(Records));
export { ProjectRecords };
//# sourceMappingURL=project.model.js.map
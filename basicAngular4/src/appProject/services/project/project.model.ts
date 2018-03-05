import { Records } from '../../../dataManagement/model/records';
import { Field, BaseField } from '../../../dataManagement/model/field';
import { EditElementDefinition } from '../../../dataManagement/model/definitions/elementDefinition';

export class ProjectRecords extends Records<string> {

 constructor(
        formName: string
        , fields: Field<any>[] = []) {
        super(formName, fields);
    }


    public GetFormDefinition() {
        console.error('GetFormDefinition');
        if (this._UIElements.length <= 0) {
  //          let vals: IValidator[] = [];
    //        let nvals: IValidator[] = [];
            let elm = new EditElementDefinition('projectForm', 'name', true, 'Shannon');
            //
            this._UIElements.push(elm);
        }
        return this._UIElements;
    }

    UpdateDependentUI(): void {

    }

    GetUIValue(fieldID: string): any {
        return this._form.controls[fieldID].value;
    }

    New(data: any): Field<any> {
        return new BaseField(data);
    }
}

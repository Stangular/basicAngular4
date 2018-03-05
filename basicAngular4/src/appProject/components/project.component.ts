import { Component , OnInit} from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../services/project/project.service';
//import { DataHTTPService } from '../../dataManagement/service/dataHTTP.service';
import { IElementDefinition } from '../../dataManagement/model/definitions/elementDefinition'

@Component({
    selector: 'project-item',
    templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

    elements: IElementDefinition<any>[] = [];
    form: FormGroup;

constructor(private projectService:ProjectService) {}


    ngOnInit() {
        this.InitForm();
    }


    getElement(elementID: string) {
        return this.elements.find(e => e.FieldID() === elementID) || {};
    }

    InitForm(): FormGroup {
        console.error('InitForm');
        this.elements = this.projectService.Content.GetFormDefinition();
        console.error('2');
       this.form = this.projectService.Content.Form;
       console.error('3');
        this.projectService.Init();
        // this.projectService.Content.SelectItem(0);
        return this.form;
    }

    
}
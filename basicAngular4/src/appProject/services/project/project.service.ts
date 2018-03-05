import { Injectable } from '@angular/core';
import { ProjectRecords } from './project.model';
import { IRecordService } from '../../../dataManagement/model/records';
import { IForm } from '../../../dataManagement/model/form/form';
import { DataHTTPService } from '../../../dataManagement/service/dataHTTP.service';

@Injectable()
export class ProjectService implements IRecordService {
    private _project: ProjectRecords;
    constructor( private dataService: DataHTTPService) { }

    public get Content(): ProjectRecords {
        if (null == this._project) {
            this._project = new ProjectRecords('projectForm');
        }
        return this._project;
    }

     contentSuccess(data: any) {
        console.error('sss');
        //let form = data.dependentContent.find(c => c.formName == 'projectForm');
        //if (!!form) {
        //    this._project.LoadData(form.content, [] , data.recordCount);
        //}
       
    }

    contentFail(data: any) {

    }

    public Init() {

        let p = 'http://localhost:52462/api/data/111';
        console.error(p);
        this.dataService.getContent(p).subscribe(
            data => this.contentSuccess(data),
            err => this.contentFail(err));
    }

    
}
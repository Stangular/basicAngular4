import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ngMaterialModule } from '../../ui/module/ngMaterialUI.module';
import { ProjectComponent } from '../components/project.component';
import { ProjectRoute } from '../routes/project.route';
// import 'rxjs/Rx';
import { FormInputElementComponent } from '../../ui/components/edit/form-input.component';
//import { ElementDefinitionFactoryService } from '../../dataManagement/service/elementDefinitionFactoryService'
import { DataHTTPService } from '../../dataManagement/service/dataHTTP.service'
import { ProjectService } from '../services/project/project.service'

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
        , ngMaterialModule
        , ProjectRoute
    ],

    declarations: [
        ProjectComponent
        , FormInputElementComponent
    ],

    providers: [ DataHTTPService
                ,ProjectService],

    exports: [ngMaterialModule]
})

export class ProjectModule { }
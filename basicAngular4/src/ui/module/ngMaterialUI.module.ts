import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule,MatMenuModule ,MatInputModule,MatCardModule} from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
        , MatIconModule
        , MatToolbarModule
        , MatListModule
        , MatMenuModule
        , MatButtonModule
        , MatInputModule
        , MatCardModule
  ],

    declarations: [],
    exports: [
        MatListModule
        , MatIconModule
        , MatToolbarModule
        , MatMenuModule
        , MatButtonModule
        , MatInputModule
        , MatCardModule
    ],

    providers: []
})

export class ngMaterialModule { }
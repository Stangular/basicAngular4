import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navigation/navmenu.component';
import { AppRoutes } from './app.routes';

import { ProjectModule } from '../appProject/modules/project.module';
// @import "~@angular/material/prebuilt-themes/indigo-pink.css";

@NgModule({
    imports: [
        CommonModule
        , RouterModule
        , AppRoutes
        , HttpModule
        , BrowserModule
        , BrowserAnimationsModule
        , ProjectModule
    ],

    declarations: [
        AppComponent,
        NavMenuComponent
    ],
        
    exports: [
        NavMenuComponent
    ],
    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }
import { Injectable } from '@angular/core';
import { IElementDefinition,EditElementDefinition } from '../model/definitions/elementDefinition';

@Injectable()
export class ElementDefinitionFactoryService {

    _elms: IElementDefinition<string>[] = [];  // should be _textElms...

    constructor() {

                let b: boolean = true;
                 let elm = new EditElementDefinition('projectForm', 'name', b, 'name');
               this._elms.push(elm);

        //       this._elms.push(new EditElementDefinition<number>('document', 'year', true, "Year", [/\d/, /\d/, /\d/, /\d/], 1900, nvals, 1900, 1900));
        //       this._elms.push(new EditElementDefinition<string>('document', 'description', true, "Description", null, 'test', vals));


    }

    ElementDefinition(ID: string) {
        return this._elms.find(e => e.FieldID() == ID) || this._elms[0];
    }
}
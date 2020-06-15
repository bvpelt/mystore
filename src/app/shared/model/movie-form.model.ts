import { FormGroup } from '@angular/forms';

export enum MOVIEFORM_ACTION {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}

export class MovieForm {
    constructor(public action: string, // add, update, delete
        public form: FormGroup) { }
}
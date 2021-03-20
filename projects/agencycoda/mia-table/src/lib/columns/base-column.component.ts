import { Component, Input } from "@angular/core";
import { MiaColumn } from "../entities/mia-column";

@Component({
    selector: 'mia-base-column',
    template: ''
})
export class BaseColumnComponent {
    @Input() column: MiaColumn = new MiaColumn();
    @Input() item: any;

    getFieldValue(): any {
        if(this.column.field_key == undefined){
            return '';
        }

        if (typeof this.column.field_key == 'string' && this.item[this.column.field_key] != undefined) {
          return this.item[this.column.field_key];
        }

        let valueFinal = this.item;
        for (const key of this.column.field_key!) {
          if(valueFinal[key] == undefined){
            return;
          }
          valueFinal = valueFinal[key];
        }
        return valueFinal;
      }
}

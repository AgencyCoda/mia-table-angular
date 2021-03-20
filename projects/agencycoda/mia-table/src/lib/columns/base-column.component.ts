import { Component, Input } from "@angular/core";
import { MiaColumn } from "../entities/mia-column";

@Component({
    selector: 'mia-base-column',
    template: ''
})
export class BaseColumnComponent {
    @Input() column: MiaColumn = new MiaColumn();
    @Input() item: any;

    getFieldValueByKey(key: string|Array<string>|undefined): any {
      if(key == undefined){
        return '';
      }

      if (typeof key == 'string' && this.item[key] != undefined) {
        return this.item[key];
      }

      let valueFinal = this.item;
      for (const keyObj of key!) {
        if(valueFinal[keyObj] == undefined){
          return '';
        }
        valueFinal = valueFinal[keyObj];
      }
      return valueFinal;
    }

    getFieldValue(): any {
      return this.getFieldValueByKey(this.column.field_key);
    }
}

import { Component, OnInit } from '@angular/core';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'lib-date-editable-column',
  templateUrl: './date-editable-column.component.html',
  styleUrls: ['./date-editable-column.component.scss']
})
export class DateEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.createFormControl();
  }
}

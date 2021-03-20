import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { TableAnimation } from '../../animations/table-animation';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { MiaPagination } from '@agencycoda/mia-core';

@Component({
  selector: 'mia-table',
  templateUrl: './mia-table.component.html',
  styleUrls: ['./mia-table.component.scss'],
  animations: [
    TableAnimation.componentAnimation
  ]
})
export class MiaTableComponent implements OnInit {

  @Input() config = new MiaTableConfig();

  selection = new SelectionModel<any>(true, [], true);
  dataItems?: MiaPagination<any>;
  displayColumns: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
    this.processDisplayColumns();
    this.loadMocks();
  }

  processDisplayColumns() {
    this.displayColumns = new Array<String>();
    for (const column of this.config.columns) {
      this.displayColumns.push(column.key);
    }
  }

  loadMocks() {
    this.dataItems = {
      current_page: 1,
      first_page_url: '',
      from: '',
      last_page: 1,
      last_page_url: '',
      next_page_url: '',
      path: '',
      per_page: 50,
      prev_page_url: '',
      to: '',
      total: 10,
      data: [
        {
          
        }
      ]
    };
  }
}

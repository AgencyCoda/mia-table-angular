import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() mockData: MiaPagination<any> | undefined;

  @Output() isLoading = new EventEmitter<boolean>();

  selection = new SelectionModel<any>(true, [], true);
  dataItems?: MiaPagination<any>;
  displayColumns: Array<String> = [];
  _isLoading = true;

  constructor() { }

  ngOnInit(): void {
    this.processDisplayColumns();
    this.loadMocks();
    this.loadItems();
  }

  onClickSelect() {
    
  }

  onClickItem(item: any) {
    this.config.onClick.next({ key: 'click-row', item: item });
  }

  loadItems() {
    this.setStartLoading();
    this.config.service.list(this.config.query).then(result => {
      this.dataItems = result;
      this.setEndLoading();
    });
  }

  processDisplayColumns() {
    this.displayColumns = new Array<String>();
    for (const column of this.config.columns) {
      this.displayColumns.push(column.key);
    }
  }

  loadMocks() {
    if(this.mockData){
      this.dataItems = this.mockData;
      this.setStartLoading();
    }
  }
  
  setStartLoading() {
    this._isLoading = true;
    this.isLoading.emit(true);
  }

  setEndLoading() {
    this._isLoading = true;
    this.isLoading.emit(false);
  }
}

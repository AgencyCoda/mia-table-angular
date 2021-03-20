import { Component, Input, OnInit } from '@angular/core';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-more-column',
  templateUrl: './more-column.component.html',
  styleUrls: ['./more-column.component.scss']
})
export class MoreColumnComponent extends BaseColumnComponent implements OnInit {

  @Input() config!: MiaTableConfig;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  clickButton(item: any) {
    this.config.onClick.next(item.key);
  }
}

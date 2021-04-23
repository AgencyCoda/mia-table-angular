import { BaseColumnComponent, MiaTableConfig } from '@agencycoda/mia-table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-icon-toggle-column',
  templateUrl: './icon-toggle-column.component.html',
  styleUrls: ['./icon-toggle-column.component.scss']
})
export class IconToggleColumnComponent extends BaseColumnComponent implements OnInit {

  @Input() config!: MiaTableConfig;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  clickButton($event: any) {
    this.config.onClick.next({ key: this.column.extra.key_action, item: this.item });
    $event.stopPropagation();
    $event.preventDefault();
    return false;
  }

  getColor(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.color;
      }
    }

    return '';
  }

  getIcon(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.icon;
      }
    }
    return '';
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'lib-more-column',
  templateUrl: './more-column.component.html',
  styleUrls: ['./more-column.component.scss']
})
export class MoreColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

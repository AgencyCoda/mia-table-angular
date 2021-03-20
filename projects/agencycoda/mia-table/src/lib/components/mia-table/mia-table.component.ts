import { Component, Input, OnInit } from '@angular/core';
import { TableAnimation } from '../../animations/table-animation';
import { MiaTableConfig } from '../../entities/mia-table-config';

@Component({
  selector: 'mia-table',
  templateUrl: './mia-table.component.html',
  styleUrls: ['./mia-table.component.css'],
  animations: [
    TableAnimation.componentAnimation
  ]
})
export class MiaTableComponent implements OnInit {

  @Input() config = new MiaTableConfig();

  constructor() { }

  ngOnInit(): void {
  }

}

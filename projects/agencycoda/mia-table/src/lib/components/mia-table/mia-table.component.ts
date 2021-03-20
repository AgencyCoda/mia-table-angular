import { Component, Input, OnInit } from '@angular/core';
import { MiaTableConfig } from '../../entities/mia-table-config';

@Component({
  selector: 'mia-table',
  templateUrl: './mia-table.component.html',
  styleUrls: ['./mia-table.component.css']
})
export class MiaTableComponent implements OnInit {

  @Input() config = new MiaTableConfig();

  constructor() { }

  ngOnInit(): void {
  }

}

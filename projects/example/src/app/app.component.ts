import { Component, OnInit } from '@angular/core';
import { MiaTableConfig } from 'projects/agencycoda/mia-table/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tableConfig: MiaTableConfig = new MiaTableConfig();

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.tableConfig.columns = [
      { key: 'id', type: 'string' },
      { key: 'title', type: 'string' },
    ];
  }
}

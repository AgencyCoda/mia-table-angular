import { MiaPagination } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaTableConfig } from 'projects/agencycoda/mia-table/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tableConfig: MiaTableConfig = new MiaTableConfig();
  mockData?: MiaPagination<any>;

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.tableConfig.columns = [
      { key: 'selection', type: 'selection', title: '' },
      //{ key: 'id', type: 'string', title: 'ID', field_key: 'id' },
      { key: 'user', type: 'user', title: '# User', extra: { field_photo: 'photo', field_firstname: 'firstname', field_lastname: 'lastname', field_subtitle: 'role', field_is_online: 'is_online' } },
      { key: 'title', type: 'string', title: 'Titulo', field_key: 'title' },
      { key: 'created_at', type: 'date', title: 'Created At', field_key: 'created_at' },
    ];

    this.mockData = {
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
          id: 1, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: '', subtitle: 'Administrador', is_online: 0, created_at: '1989-08-25 18:00:00'
        }
      ]
    };
  }
}

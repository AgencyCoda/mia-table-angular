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
      { key: 'user', type: 'user', title: '# User', extra: { 
        field_photo: 'photo', field_firstname: 'firstname', field_lastname: 'lastname', field_subtitle: 'role', field_is_online: 'is_online' 
      } },
      { key: 'title', type: 'string', title: 'Titulo', field_key: 'title' },
      { key: 'status', type: 'status', title: 'Estado', field_key: 'status', extra: {
        options: [
          { value: 0, title: 'Estado 1', color: 'warning' },
          { value: 1, title: 'Estado 2', color: 'error' },
          { value: 2, title: 'Estado 3', color: 'violet' },
          { value: 3, title: 'Estado 4', color: 'success' },
          { value: 4, title: 'Estado 5', color: 'blue' },
          { value: 5, title: 'Estado 6', color: 'cyan' },
          { value: 6, title: 'Estado 7', color: 'pink' },
          { value: 7, title: 'Estado 8', color: '' },
        ]
      } },
      { key: 'created_at', type: 'date', title: 'Created At', field_key: 'created_at' },
      { key: 'icon', type: 'icon-toggle', title: '', field_key: 'status', extra: {
        key_action: 'click-lock',
        options: [
          { value: 0, color: 'red', icon: 'lock' },
          { value: 1, color: '#000', icon: 'lock-open' },
        ]
      } },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'visibility', title: 'View', key: 'view' },
          { icon: 'create', title: 'Edit', key: 'edit' },
          { icon: 'delete', title: 'Delete', key: 'remove' },
        ]
      } }
    ];

    this.tableConfig.loadingColor = 'red';
    this.tableConfig.hasEmptyScreen = true;
    this.tableConfig.emptyScreenTitle = 'No tenes cargado ningun elemento todavia';

    this.tableConfig.onClick.subscribe(result => {
      console.log('--ACTION--');
      console.log(result.key);
    });

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
      total: 1,
      data: [
        {
          id: 1, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: '', subtitle: 'Administrador', is_online: 0, status: 1, created_at: '1989-08-25 18:00:00'
        }
      ]
    };
  }
}

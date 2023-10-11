import { MIA_CORE_PROVIDER, MiaBaseCrudHttpService, MiaCoreConfig, MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService extends MiaBaseCrudHttpService<any> {

  constructor(
    protected http: HttpClient,
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
  ) {
    super(config, http);
    this.basePathUrl = 'https://ecotopia-dev.uc.r.appspot.com/mia-blog';
  }

  listOb(query: MiaQuery): Observable<MiaPagination<any>> {
    return this.list(query);
  }

  list(query: MiaQuery): Observable<MiaPagination<any>> {
    return this.listWithExtras(query, { access_token: 'aa9676c80bc803b902522459852365847dceb447' });
  }


}

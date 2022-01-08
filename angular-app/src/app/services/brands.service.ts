import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { PagedViewModel } from '../models/paged-view-model';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private http: HttpClient) {}

  getBrands(pageIndex:number=1, pageSize:number=3): Observable<PagedViewModel<Brand>> {
    return this.http.get<PagedViewModel<Brand>>(`${environment.apiLink}/api/brands/${pageIndex}/${pageSize}`);
  }
}

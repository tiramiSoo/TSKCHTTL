import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../../../features/asset/models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  //API tài sản
  getAllTaiSan(
    ...params: [number, number | 0, number, number | 0, number, number, number]
  ): Observable<{ dtTableAll: Asset[] }> {
    const [loaict, loaict_id, dvql_id, httn_id, namtheodoi, page, numberInPage] = params;

    const body = {
      data: {
        loaict,
        loaict_id,
        httn_id,
        dvql_id,
        namtheodoi,
        page,
        numberInPage
      }
    };

    return this.http.post<{ dtTableAll: Asset[] }>(`https://localhost:7027/api/TaiSan/getTableQLTS`, body);
  }
}
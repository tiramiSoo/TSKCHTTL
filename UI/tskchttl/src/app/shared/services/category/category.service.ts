import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DanhMuc } from '../../../features/category/category.model';
import { KhauHao } from '../../../features/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getListDanhMuc(): Observable<DanhMuc[]> {
    return this.http.get<DanhMuc[]>(`https://localhost:7027/api/DanhMuc/getListDanhMuc`);
  }

  getListKhauHao(): Observable<KhauHao[]> {
    return this.http.get<KhauHao[]>(`https://localhost:7027/api/DanhMuc/getListKhauHao`);
  }
}

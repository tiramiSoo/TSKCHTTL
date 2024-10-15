import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KhauHao } from '../category.model';
import { CategoryService } from '../../../shared/services/category/category.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';  
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-depreciation-category',
  standalone: true,
  imports: [AgGridModule, ProgressSpinnerModule, RouterModule],
  templateUrl: './depreciation-category.component.html',
  styleUrl: './depreciation-category.component.css'
})
export class DepreciationCategoryComponent {
  rowData: KhauHao[] = [];
  isLoading: boolean = true;

  colDefs: ColDef[] = [
    { headerName: '', valueGetter: 'node.rowIndex + 1', width: 50, cellStyle: { textAlign: 'center' }, suppressHeaderMenuButton: true, suppressMovable: true, suppressSizeToFit: true },
    { field: 'tencongtrinh', headerName: 'Danh mục các loại tài sản', width: 250},
    { field: 'thoihansudung', headerName: 'Thời gian sử dụng (năm)', width: 250 },
    { field: 'tylehaomon', headerName: 'Tỷ lệ hao mòn' },
    { field: 'dm_ten', headerName: 'Loại công trình' },
    { field: '', headerName: 'Thao tác' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellStyle: { borderRight: '1px solid #dde2eb' },
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadKhauHao();
  }

  loadKhauHao() {
    this.categoryService.getListKhauHao().subscribe({
      next: (data) => {
        this.rowData = data; // Cập nhật danh sách danh mục
        this.isLoading = false; // Đặt trạng thái loading thành false
      },
      error: (err) => {
        console.error('Error fetching danh mục', err);
        this.isLoading = false; // Đặt trạng thái loading thành false
      }
    });
  }
}

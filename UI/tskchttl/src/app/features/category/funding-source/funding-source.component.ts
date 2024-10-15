import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DanhMuc } from '../category.model';
import { CategoryService } from '../../../shared/services/category/category.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';  
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-funding-source',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressSpinnerModule, AgGridModule],
  templateUrl: './funding-source.component.html',
  styleUrl: './funding-source.component.css'
})
export class FundingSourceComponent implements OnInit{
  rowData: DanhMuc[] = [];
  isLoading: boolean = true;

  colDefs: ColDef[] = [
    { headerName: '', valueGetter: 'node.rowIndex + 1', width: 50, cellStyle: { textAlign: 'center' }, suppressHeaderMenuButton: true, suppressMovable: true, suppressSizeToFit: true },
    { field: 'dm_ma', headerName: 'Mã nguồn kinh phí'},
    { field: 'dm_ten', headerName: 'Tên nguồn kinh phí', width: 250 },
    { field: 'dm_pid', headerName: 'Mã NSNN' },
    { field: 'dm_mota', headerName: 'Ghi chú' },
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
    this.loadDanhMuc();
  }

  loadDanhMuc() {
    this.categoryService.getListDanhMuc().subscribe({
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

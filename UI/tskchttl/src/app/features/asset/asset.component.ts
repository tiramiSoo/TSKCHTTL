import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../shared/services/asset/asset.service';
import { Asset } from './models/asset.model';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';  
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AssetDetailComponent } from './viewasset.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddAssetComponent } from "./add-asset/add-asset.component";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-asset',
  standalone: true,
  imports: [AgGridModule, AssetDetailComponent, CommonModule, RouterModule, AddAssetComponent, ProgressSpinnerModule],
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  rowData: Asset[] = [];
  selectedAsset: any;
  isLoading: boolean = true;
  isPopupOpen = false; 
  namtheodoi: number = new Date().getFullYear(); //lấy năm hiện tại

  colDefs: ColDef[] = [
    { headerName: '', valueGetter: 'node.rowIndex + 1', width: 50, cellStyle: { textAlign: 'center' }, suppressHeaderMenuButton: true, suppressMovable: true, suppressSizeToFit: true },
    { headerName: '', width: 50, checkboxSelection: true, suppressMovable: true, suppressSizeToFit: true }, 
    { field: 'ma_qhns', headerName: 'Mã tài sản', width: 150 },
    { field: 'ten', headerName: 'Tên tài sản', width: 400 },
    { field: 'loaict_id_name', headerName: 'Loại tài sản' },
    { field: 'so_luong', headerName: 'Số lượng' },
    { field: 'bdg_nguyen_gia', headerName: 'Nguyên Giá', valueFormatter: this.numberFormatter },
    { field: '', headerName: 'Giá quy ước', valueFormatter: this.numberFormatter },
    { field: 'bdg_haomon_khauhao_luyke', headerName: 'Hao mòn lũy kế', valueFormatter: this.numberFormatter },
    { field: 'bdg_giatri_conlai', headerName: 'Giá trị còn lại', valueFormatter: this.numberFormatter },
    { field: 'ngay_ghitang', headerName: 'Ngày ghi tăng', valueFormatter: this.dateFormatter },
    { field: 'ngay_batdausudung', headerName: 'Ngày BĐ tính HM', valueFormatter: this.dateFormatter },
    { field: 'namtheodoi', headerName: 'Năm theo dõi' },
    { field: 'tinhtrang_taisan', headerName: 'Trạng thái', cellDataType: "string", valueFormatter: this.statusFormatter },
    { field: 'bdg_hm_tyle', headerName: 'Tỷ lệ hao mòn (%)' }
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellStyle: { borderRight: '1px solid #dde2eb' },
  };

  // Dữ liệu cho hàng tổng số
  totalRow: any = {
    ma_qhns: 'Tổng số',
    ten: '',
    dm_ten: '',
    so_luong: 0,
    bdg_nguyen_gia: 0,
  };

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    this.rowData = [];
    this.loadData(this.namtheodoi); // Gọi dữ liệu với năm mặc định
  }

  // Phương thức để tải dữ liệu với năm theo dõi
  loadData(namtheodoi: number) {
    const paramsList: [number, number | 0, number, number | 0, number, number, number][] = [
      [1, 0, 1, 0, namtheodoi, 1, 1],
      [2, 0, 1, 0, namtheodoi, 1, 1],
    ];

    // Thực hiện gọi API cho từng nhóm tham số
    paramsList.forEach(params => {
      this.assetService.getAllTaiSan(...params).subscribe({
        next: (data) => {
          if (data && Array.isArray(data.dtTableAll)) {
            this.rowData = [...this.rowData, ...data.dtTableAll];

            const defaultAsset = this.rowData.find(asset => asset.id === 1);
            if (defaultAsset) {
              this.selectedAsset = defaultAsset;
            } else if (this.rowData.length > 0) {
              this.selectedAsset = this.rowData[0];
            }
          } else {
            console.error('Data is not an array:', data);
          }
          console.log(this.rowData);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching data', err);
          this.isLoading = false;
        }
      });
    });
  }

  // Phương thức để xử lý sự kiện năm thay đổi từ Navbar
  onYearChange(nam: number) {
    this.loadData(nam); // Gọi lại dữ liệu với năm mới
  }

  onRowClicked(event: any) {
    this.selectedAsset = event.data;
    console.log(this.selectedAsset);
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  dateFormatter(params: any) {
    const date = new Date(params.value);
    return date.toLocaleDateString('vi-VN');
  }

  numberFormatter(params: any) {
    if (params.value !== null && params.value !== undefined) {
      return params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return '';
  }

  statusFormatter(params: any) {
    return params.value ? 'Đang sử dụng' : 'Không sử dụng';
  }
}
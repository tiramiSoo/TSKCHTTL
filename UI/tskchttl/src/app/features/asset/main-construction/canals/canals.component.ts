import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AssetDetailComponent } from '../../viewasset.component';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../../../shared/services/asset/asset.service';
import { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canals',
  standalone: true,
  imports: [AgGridModule, AssetDetailComponent, CommonModule],
  templateUrl: './canals.component.html',
})
export class CanalsComponent {
  rowData: Asset[] = [];
  selectedAsset: any;
  isLoading: boolean = true;

  colDefs: ColDef[] = [
    { headerName: '', valueGetter:'node.rowIndex + 1', width: 50, cellStyle:{ textAlign: 'center' },suppressHeaderMenuButton: true,suppressMovable: true, suppressSizeToFit: true},
    { headerName: '', width: 50, checkboxSelection: true, suppressMovable: true, suppressSizeToFit: true}, 
    { field: 'ma_qhns', headerName: 'Mã tài sản' , width: 150 },
    { field: 'ten', headerName: 'Tên tài sản', width: 400 },
    { field: 'loaict_id_name', headerName: 'Loại tài sản'},
    { field: 'so_luong', headerName: 'Số lượng' },
    { field: 'bdg_nguyen_gia', headerName: 'Nguyên Giá' , valueFormatter: this.numberFormatter},
    { field: '', headerName: 'Giá quy ước' , valueFormatter: this.numberFormatter},
    { field: 'bdg_haomon_khauhao_luyke', headerName: 'Hao mòn lũy kế' , valueFormatter: this.numberFormatter}, //cộng của hao mòn các năm
    { field: 'bdg_giatri_conlai', headerName: 'Giá trị còn lại' , valueFormatter: this.numberFormatter},
    { field: 'ngay_ghitang', headerName: 'Ngày ghi tăng' , valueFormatter: this.dateFormatter},
    { field: 'ngay_batdausudung', headerName: 'Ngày BĐ tính HM' , valueFormatter: this.dateFormatter},
    { field: 'namtheodoi', headerName: 'Năm theo dõi' },
    { field: 'tinhtrang_taisan', headerName: 'Trạng thái', cellDataType: "string", valueFormatter: this.statusFormatter },
    { field: 'bdg_hm_tyle', headerName: 'Tỷ lệ hao mòn (%)' }
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellStyle: {borderRight: '1px solid #dde2eb'},
    
  };

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    this.rowData = [];
    //loaict, loaict_id, dvql_id, httn_id, namtheodoi, page, numberInPage
    const paramsList: [number, number | 0, number, number | 0, number, number, number][] = [
      [1, 116, 1, 0, 2024, 1, 1],
    ];
  
    // Thực hiện gọi API cho từng nhóm tham số
    paramsList.forEach(params => {
      this.assetService.getAllTaiSan(...params).subscribe({
        next: (data) => {
          console.log('Data received from API:', data); // In ra dữ liệu nhận được
          if (data && Array.isArray(data.dtTableAll)) {
            // Hợp nhất dữ liệu từ mỗi lần gọi API với rowData hiện tại
            this.rowData = [...this.rowData, ...data.dtTableAll];
    
            // Lựa chọn tài sản mặc định (nếu tìm thấy id 1)
            const defaultAsset = this.rowData.find(asset => asset.id === 1);
            if (defaultAsset) {
              this.selectedAsset = defaultAsset;
            } else if (this.rowData.length > 0) {
              // Nếu không tìm thấy id 1, lấy tài sản đầu tiên từ rowData
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
          this.isLoading = false; // Đảm bảo cập nhật trạng thái loading
        }
      });
    });
  }
  

  onRowClicked(event: any) {
    this.selectedAsset = event.data;
    console.log(this.selectedAsset);
  }

  dateFormatter(params: any) {
    const date = new Date(params.value);
    return date.toLocaleDateString('vi-VN'); // Định dạng ngày theo kiểu Việt Nam
  }

  // Hàm định dạng số
  numberFormatter(params: any) {
    if (params.value !== null && params.value !== undefined) {
      return params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Thêm dấu . mỗi 3 số
    }
    return '';
  }

  statusFormatter(params: any) {
    return params.value ? 'Đang sử dụng' : 'Không sử dụng'; // Trả về chuỗi tương ứng
  }
}

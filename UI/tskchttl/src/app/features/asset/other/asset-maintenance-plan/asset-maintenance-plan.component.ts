import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../../../shared/services/asset/asset.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-asset-maintenance-plan',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './asset-maintenance-plan.component.html',
  styleUrl: './asset-maintenance-plan.component.css'
})
export class AssetMaintenancePlanComponent {
  rowData: Asset[] = [];

  selectedAsset: any;

  colDefs: ColDef[] = [
    { headerName: '', valueGetter:'node.rowIndex + 1', width: 50, cellStyle:{ textAlign: 'center' },suppressHeaderMenuButton: true,suppressMovable: true, suppressSizeToFit: true},
    { field: 'maTaiSan', headerName: 'Loại hạng mục' },
    { field: 'tenTaiSan', headerName: 'Nội dung hạng mục'},
    { field: 'loaiTaiSan', headerName: 'Phạm vi'},
    { field: 'slTaiSan', headerName: 'Nội dung sửa chữa' },
    { field: 'nguyenGia', headerName: 'Kinh phí dự kiến' },
    { field: 'giaQuyUoc', headerName: 'Thời gian thực hiện' },
    { field: 'giaQuyUoc', headerName: 'Nguồn kinh phí' },
    { field: 'giaQuyUoc', headerName: 'Ghi chú' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellStyle: {borderRight: '1px solid #dde2eb'},
    
  };

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    // this.assetService.getAllTaiSan().subscribe({
    //   next: (data) => {
    //     this.rowData = data; // Gán dữ liệu API vào rowData
    //     const defaultAsset = this.rowData.find(asset => asset.id === 1);
    //     if (defaultAsset) {
    //       this.selectedAsset = defaultAsset;
    //     } else if (this.rowData.length > 0) {
    //       // Nếu không tìm thấy id 1, lấy tài sản đầu tiên
    //       this.selectedAsset = this.rowData[0];
    //     }
    //     console.log(data);
    //   },
    //   error: (err) => console.error('Error fetching data', err)
    // });
  }

  onRowClicked(event: any) {
    this.selectedAsset = event.data;
    console.log(this.selectedAsset);
  }
}

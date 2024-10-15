import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Asset } from '../models/asset.model';
import { AssetService } from '../../../shared/services/asset/asset.service';

@Component({
  selector: 'app-increase',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './increase.component.html',
  styleUrl: './increase.component.css'
})
export class IncreaseComponent {
  rowData: Asset[] = [];

  selectedAsset: any;

  colDefs: ColDef[] = [
    { headerName: '', valueGetter:'node.rowIndex + 1', width: 50, cellStyle:{ textAlign: 'center' },suppressHeaderMenuButton: true,suppressMovable: true, suppressSizeToFit: true},
    { headerName: '', width: 50, checkboxSelection: true, suppressMovable: true, suppressSizeToFit: true}, 
    { field: 'maTaiSan', headerName: 'Số chứng từ' },
    { field: 'tenTaiSan', headerName: 'Ngày chứng từ'},
    { field: 'loaiTaiSan', headerName: 'Ngày ghi tăng'},
    { field: 'slTaiSan', headerName: 'Nội dung' },
    { field: 'nguyenGia', headerName: 'Tổng nguyên giá' },
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

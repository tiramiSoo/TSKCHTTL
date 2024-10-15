import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';

@Component({
  selector: 'app-asset-detail',
  standalone: true,
  imports: [CommonModule, AssetComponent],
  template: `
    <div *ngIf="selectedAsset" class="p-4 border border-gray-300 rounded-md mt-4">
      <div class="w-full bg-maincolor text-white border border-gray-300 p-2 mb-4">
        <h3 class="text-lg font-semibold">Thông tin chung</h3>
      </div>
      <div class="flex">
        <div class="w-1/3 pr-4 ml-1">
          <p class="mb-2">Mã tài sản: <span class="font-bold ml-3">{{ selectedAsset.ma_qhns }}</span></p>
          <p class="mb-2">Tên tài sản: <span class="font-bold ml-2">{{ selectedAsset.ten }}</span></p>
        </div>
        <div class="w-2/3">
          <div class="flex items-start">
            <!-- Title Section -->
            <h2 class="mr-5 ">Nguyên giá</h2>
            
            <!-- List Section -->
            <ul class="list-none space-y-1">
              <li class="font-bold">Ngân sách Trung Ương: <span class="font-bold ml-1">{{ numberFormatter(getNguonGiaTri('Ngân sách Trung Ương')) }}</span></li>
              <li class="font-bold">Ngân sách Tỉnh: <span class="font-bold ml-1">{{ numberFormatter(getNguonGiaTri('Ngân sách Tỉnh')) }}</span></li>
              <li class="font-bold">Ngân sách Huyện: <span class="font-bold ml-1">{{ numberFormatter(selectedAsset.nsh) }}</span></li>
              <li class="font-bold">Ngân sách Xã: <span class="font-bold ml-1">{{ numberFormatter(selectedAsset.nsx) }}</span></li>
              <li class="font-bold">Nguồn viện trợ, tài trợ: <span class="font-bold ml-1">{{ numberFormatter(getNguonGiaTri('Nguồn viện trợ, tài trợ')) }}</span></li>
              <li class="font-bold">Phí, lệ phí để lại: <span class="font-bold ml-1">{{ numberFormatter(selectedAsset.lePhi) }}</span></li>
              <li class="font-bold">Nguồn khác: <span class="font-bold ml-1">{{ numberFormatter(getNguonGiaTri('Nguồn khác')) }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AssetDetailComponent implements OnChanges {
  @Input() selectedAsset: any;
  nguonhinhthanhArray: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedAsset'] && changes['selectedAsset'].currentValue) {
      // Nếu `nguonhinhthanh` là chuỗi JSON, parse nó thành mảng
      if (changes['selectedAsset'].currentValue.nguonhinhthanh) {
        this.nguonhinhthanhArray = JSON.parse(changes['selectedAsset'].currentValue.nguonhinhthanh);
      } else {
        this.nguonhinhthanhArray = []; // Reset nếu không có dữ liệu
      }
    }
  }

  // Phương thức để lấy giá trị của nguồn hình thành dựa trên tên nguồn
  getNguonGiaTri(tenNguon: string): string {
    const nguon = this.nguonhinhthanhArray.find(
      (item) => item.nguonhinhthanh_ten === tenNguon
    );
    return nguon ? nguon.giatri : '0'; // Trả về giá trị hoặc '0' nếu không tìm thấy
  }

  numberFormatter(value: any) {
    if (value !== null && value !== undefined) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Thêm dấu . mỗi 3 số
    }
    return '';
  }
}
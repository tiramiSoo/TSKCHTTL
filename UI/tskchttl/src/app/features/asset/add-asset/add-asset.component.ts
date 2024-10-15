import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule],
  templateUrl: './add-asset.component.html',
  styleUrl: './add-asset.component.css'
})
export class AddAssetComponent {
  namXayDung !: Date;
  namBanGiao !: Date;
  namKhaiThac !: Date;
  newAsset: any = {};
  isPopupOpen = false; // Biến quản lý trạng thái popup

  // Mở popup
  @Input() isOpen: boolean = false; // Trạng thái mở popup
  @Output() close = new EventEmitter<void>(); // Sự kiện đóng popup

  // Phương thức để đóng popup
  onClose() {
    this.close.emit();
  }
}

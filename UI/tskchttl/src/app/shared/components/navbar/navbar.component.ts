import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAssetComponent } from '../../../features/asset/add-asset/add-asset.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, AddAssetComponent, CalendarModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @Output() menuItemSelected = new EventEmitter<string>();
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Output() yearChange = new EventEmitter<number>()
  @Input() isSidebarOpen: boolean = true;
  nam!: Date;

  selectedMenuItem: string = '';
  isMobileMenuOpen = false; // Boolean to track menu state

  ngOnInit() {
    this.updateSelectedMenuItem();
    this.nam = new Date();
  }

  selectMenuItem(menuItem: string) {
    this.selectedMenuItem = menuItem;
    localStorage.setItem('selectedMenuItem', menuItem);
    this.menuItemSelected.emit(menuItem);
  }

  getSelectedMenuItem(): string {
    return localStorage.getItem('selectedMenuItem') || this.selectedMenuItem;
  }

  private updateSelectedMenuItem() {
    const storedMenuItem = localStorage.getItem('selectedMenuItem');
    if (storedMenuItem) {
      this.selectedMenuItem = storedMenuItem;
    } else {
      // Fallback to determine selected menu item based on current URL
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/Asset')) {
        this.selectedMenuItem = 'asset';
      } else if (currentPath.startsWith('/Exchange-Use-Infomation')) {
        this.selectedMenuItem = 'exchange-use-info';
      } else if (currentPath.startsWith('/Category')) {
        this.selectedMenuItem = 'category';
      } else if (currentPath.startsWith('/Look-Up')) {
        this.selectedMenuItem = 'look-up';
      } else if (currentPath.startsWith('/System')) {
        this.selectedMenuItem = 'system';
      } else if (currentPath.startsWith('/Report')) {
        this.selectedMenuItem = 'report';
      } else if (currentPath.startsWith('/Support')) {
        this.selectedMenuItem = 'support';
      }
      // Add more conditions for other menu items
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen; // Toggle the menu state
  }

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  onYearChange(event: any) {
    console.log('Sự kiện thay đổi:', event);
    this.nam = event.value; // Cập nhật giá trị nam khi thay đổi
    const selectedYear = this.nam.getFullYear(); // Lấy năm từ đối tượng Date
    console.log('Năm được chọn:', selectedYear); 
    this.yearChange.emit(this.nam.getFullYear()); // Phát ra năm mới
  }
}

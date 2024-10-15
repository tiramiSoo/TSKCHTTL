import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  @Output() menuItemSelected = new EventEmitter<string>();

  selectedMenuItem: string = '';

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
      if (currentPath.startsWith('/asset/other/asset-exploitation')) {
        this.selectedMenuItem = 'Khai thác tài sản';
      } else if (currentPath.startsWith('/asset/other/asset-maintenance-plan')) {
        this.selectedMenuItem = 'Kế hoạch bảo trì tàn sản';
      } else if (currentPath.startsWith('/asset/other/asset-handling')) {
        this.selectedMenuItem = 'Xử lý tài sản';
      }
      // Add more conditions for other menu items
    }
  }  
}

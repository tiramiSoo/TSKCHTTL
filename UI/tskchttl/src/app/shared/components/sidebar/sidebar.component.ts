import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  //Toggle Sidebar
  constructor(private router: Router) {}
  @Input() isSidebarOpen: boolean = true;
  selectedItem: string = '';
  dropdownStates: { [key: string]: boolean } = {
    'system': false,
    'category': false,
    'data-entry': false,
    'report': false
  };

  get currentUrl(): string {
    return this.router.url;
  }

  getMenuTitle(): string {
    const currentUrl = this.router.url;
    if (currentUrl.startsWith('/asset')) {
      return 'TÀI SẢN';
    } else if (currentUrl.startsWith('/exchange-use-information')) {
      return 'THÔNG TIN GIAO/SỬ DỤNG';
    } else if (currentUrl.startsWith('/category')) {
      return 'DANH MỤC';
    } else if (currentUrl.startsWith('/lookUp')) {
      return 'TRA CỨU';
    } else if (currentUrl.startsWith('/system')) {
      return 'HỆ THỐNG';
    } else if (currentUrl.startsWith('/report')) {
      return 'BÁO CÁO';
    } else if (currentUrl.startsWith('/support')) {
      return 'HỖ TRỢ';
    } else {
      return '';
    }
  }

  setSelectedItem(item: string) {
    this.selectedItem = item;
  }

  isItemSelected(item: string): boolean {
    return this.selectedItem === item;
  }

  toggleDropdown(dropdown: string) {
    // Close all other dropdowns
    Object.keys(this.dropdownStates).forEach(key => {
      if (key !== dropdown) {
        this.dropdownStates[key] = false;
      }
    });
    this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
    this.setSelectedItem(dropdown);
  }

  isDropdownOpen(dropdown: string): boolean {
    return this.dropdownStates[dropdown];
  }

  nestedDropdownStates: { [key: string]: { [key: string]: boolean } } = {
    'main-construction': {
      'initial-balance': false
    },
    'sub-construction': {
      'initial-balance': false
    }
  };

  toggleNestedDropdown(parent: string, child: string) {
    if (this.nestedDropdownStates[parent]) {
      // Close all other nested dropdowns
      Object.keys(this.nestedDropdownStates).forEach(key => {
        if (key !== parent) {
          Object.keys(this.nestedDropdownStates[key]).forEach(nestedKey => {
            this.nestedDropdownStates[key][nestedKey] = false;
          });
        }
      });
      this.nestedDropdownStates[parent][child] = !this.nestedDropdownStates[parent][child];
    }
    this.setSelectedItem(`${parent}-${child}`);
  }

  isNestedDropdownOpen(parent: string, child: string): boolean {
    return this.nestedDropdownStates[parent] && this.nestedDropdownStates[parent][child];
  }

  navigateTo(event: Event, route: string): void {
    event.preventDefault(); // Prevent the default link behavior
    this.router.navigate([route]);
    this.setSelectedItem(route);
  }
}

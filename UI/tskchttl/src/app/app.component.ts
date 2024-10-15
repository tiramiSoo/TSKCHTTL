import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent, CommonModule],
  template: `
    <app-navbar (menuItemSelected)="onMenuItemSelected($event)"></app-navbar>
    <app-sidebar [selectedMenuItem]="currentMenuItem"></app-sidebar>
    <router-outlet></router-outlet>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen: boolean = true;
  reloadContent = false;

  onToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onYearChange(nam: number) {
    this.reloadContent = !this.reloadContent;
  }
}

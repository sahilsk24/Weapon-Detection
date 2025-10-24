import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isMenuActive = false;
  currentTheme = 'default'; // use 'default' instead of 'root'
  themes = ['default', 'blue', 'purple', 'red', 'isDark'];

  constructor(private router: Router, private renderer: Renderer2) {
    // Close menu on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuActive = false;
      }
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    } else {
      this.applyTheme('default');
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  changeTheme(theme: string) {
    this.currentTheme = theme;
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: string) {
    // Set the data-theme attribute on the <body> tag
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }
}

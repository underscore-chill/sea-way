import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  document = inject(DOCUMENT);
  window = document.defaultView;
  isOpen = signal<boolean>(false);
  constructor() {}

  navBarToggle(): void {
    if (this.window)
      if (this.window.innerWidth <= 1279) {
        this.isOpen.set(!this.isOpen());
        this.document.body.classList.toggle('mobile-nav-active');
      }
  }
}

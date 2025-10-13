import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [RouterModule, CommonModule], 
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],

})

export class Layout implements OnInit{
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }private scrollThreshold = 50; 
private isScrolled = false;
private isMobileMenuOpen = false;
  constructor() { }

  ngOnInit(): void {
   
    this.checkScrollPosition();
  }
    @HostListener('document:scroll', ['$event'])
  onDocumentScroll(event: any): void {
    this.checkScrollPosition();
  }
private checkScrollPosition(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > this.scrollThreshold;
  }
isNavbarScrolled(): boolean {
  return this.isScrolled;
}
isMobileMenuActive(): boolean {
  return this.isMobileMenuOpen;
}
onMenuClick(): void {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
onMenuLinkClick(): void {
  this.isMobileMenuOpen = false;
}
onLogoClick(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


}

import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkScrollPosition();
    
    // Route değişikliklerinde sayfanın başına scroll yap
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      setTimeout(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    });
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

private scrollToFragment(fragment: string): void {
  const element = document.getElementById(fragment);
  if (element) {
    const navbarHeight = 80; // Navbar yüksekliği
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  }
}


}

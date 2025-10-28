import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})

export class Loading  implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      const loadingScreen = this.el.nativeElement.querySelector('.loading-screen');
      const mainContent = this.el.nativeElement.querySelector('.main-content');
      const particles = this.el.nativeElement.querySelectorAll('.particle');
      const loadingText = this.el.nativeElement.querySelector('.loading-text');
      const ctaButton = this.el.nativeElement.querySelector('.cta-button');

      if (!particles.length) return;

    particles.forEach((p: HTMLElement, i: number) => {
      setTimeout(() => p.classList.add('visible'), i * 50);
    });

    setTimeout(() => {
      particles.forEach((p: HTMLElement, i: number) => {
        setTimeout(() => {
          p.classList.add('assembled', 'jump');
        }, i * 50);
      });
    }, 800);

    setTimeout(() => loadingText.classList.add('show'), 1500);

    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
      }, 200);
    }, 3000);

    ctaButton.addEventListener('click', () => {
      alert('ArtTech ana sayfasına hoş geldiniz!');
    });

    const skipAnimation = () => {
      particles.forEach((p: HTMLElement) => p.classList.add('visible', 'assembled', 'jump'));
      loadingText.classList.add('show');
      loadingScreen.classList.add('hidden');
      mainContent.classList.add('visible');
      document.body.style.overflow = 'auto';
    };

      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (['Enter', ' ', 'Escape'].includes(e.key)) skipAnimation();
      });

      loadingScreen.addEventListener('click', (e: MouseEvent) => {
        if (e.target === loadingScreen || e.target === loadingText) skipAnimation();
      });
    }, 100);
  }
}


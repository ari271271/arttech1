import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basvuru',
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './basvuru.html',
  styleUrl: './basvuru.css'
})
export class Basvuru implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.initializeFormAnimations();
  }

  private initializeFormAnimations(): void {
    // Form kartlarına hover efektleri için intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });

    // Sayfa yüklendikten sonra form kartlarını gözlemle
    setTimeout(() => {
      const formCards = document.querySelectorAll('.form-card, .feedback-form-wrapper, .info-card');
      formCards.forEach(card => observer.observe(card));
    }, 100);
  }

  onSubmit(event: Event, formType: string): void {
    const form = event.target as HTMLFormElement;
    const submitButton = form.querySelector('.submit-btn') as HTMLButtonElement;
    
    if (submitButton) {
      // Loading state
      submitButton.disabled = true;
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
      
      // Form gönderildikten sonra (Formspree otomatik olarak handle eder)
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        this.showSuccessMessage(formType);
      }, 2000);
    }
  }

  private showSuccessMessage(formType: string): void {
    let message = '';
    switch(formType) {
      case 'membership':
        message = 'Üyelik başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.';
        break;
      case 'competition':
        message = 'Yarışma başvurunuz başarıyla gönderildi! Projenizi değerlendirip size bilgi vereceğiz.';
        break;
      case 'feedback':
        message = 'Mesajınız başarıyla gönderildi! Görüşleriniz için teşekkür ederiz.';
        break;
    }
    
    // Basit bir success message göster
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <p>${message}</p>
        <button onclick="this.parentElement.parentElement.remove()">Tamam</button>
      </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
      if (successDiv.parentElement) {
        successDiv.remove();
      }
    }, 5000);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

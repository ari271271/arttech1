import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basvuru',
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './basvuru.html',
  styleUrl: './basvuru.css'
})
export class Basvuru implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeFormAnimations();
    
    // Fragment varsa o bölüme scroll yap
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scrollToSection(fragment);
        }, 500);
      }
    });
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
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    // Validate that required fields are not empty (no blank/whitespace-only) and email contains '@'
    const allFields = Array.from(form.querySelectorAll('input, textarea')) as HTMLInputElement[];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (const fld of allFields) {
      const tag = (fld.tagName || '').toLowerCase();
      const type = (fld.getAttribute('type') || '').toLowerCase();
      const name = fld.getAttribute('name') || '';

      // Skip non-user fields
      if (type === 'hidden' || type === 'submit' || type === 'button' || fld.disabled) continue;
      if (name === '_gotcha' || name === '_next' || name === '_subject' || name === 'form_type') continue;

      const val = (fld.value || '').trim();
      if (val.length === 0) {
        this.showErrorMessage('Lütfen tüm alanları boş bırakmayın.');
        try { fld.focus(); } catch (e) {}
        return;
      }

      // If this is an email field, ensure it contains '@' and matches basic format
      if (type === 'email' || name === '_replyto') {
        if (!val.includes('@') || !emailRegex.test(val)) {
          this.showErrorMessage("Lütfen geçerli bir e‑posta adresi girin (örn: isim@ornek.com). '@' işareti zorunludur.");
          try { fld.focus(); } catch (e) {}
          return;
        }
      }
    }
    const submitButton = form.querySelector('.submit-btn') as HTMLButtonElement;

    if (submitButton) {
      submitButton.disabled = true;
      var originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    }

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(async (response) => {
      if (response.ok) {
        try { form.reset(); } catch(e) {}
        this.showSuccessMessage(formType);
      } else {
        let errMsg = 'Gönderim başarısız.';
        try {
          const data = await response.json();
          if (data && data.error) errMsg = data.error;
        } catch(e) { /* ignore */ }
        this.showErrorMessage(errMsg);
      }
    }).catch((err) => {
      this.showErrorMessage(err && err.message ? err.message : 'Ağ veya sunucu hatası');
    }).finally(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    });
  }

  private showErrorMessage(message: string): void {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'submission-error';
    errorDiv.style.cssText = 'padding:12px;border-radius:6px;background:#ffe6e6;color:#6b0b0b;margin:16px;position:fixed;right:16px;top:16px;z-index:9999;';
    errorDiv.textContent = message;
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Kapat';
    closeBtn.style.cssText = 'margin-left:8px;background:transparent;border:1px solid rgba(0,0,0,0.05);padding:4px 8px;border-radius:4px;';
    closeBtn.onclick = () => errorDiv.remove();
    errorDiv.appendChild(closeBtn);
    document.body.appendChild(errorDiv);
    setTimeout(() => { try { errorDiv.remove(); } catch(e){} }, 7000);
  }

  private showSuccessMessage(formType: string): void {
    let message = '';
    switch (formType) {
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

    // Create overlay
    const overlay = document.createElement('div');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-live', 'polite');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;z-index:10000;padding:16px;';

    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = 'max-width:520px;width:100%;background:#fff;border-radius:12px;padding:20px 22px;box-shadow:0 10px 30px rgba(0,0,0,0.2);text-align:left;color:#0b2a2e;font-family:inherit;';

    // Header with icon
    const header = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:8px;';
    const icon = document.createElement('div');
    icon.innerHTML = '\u2714';
    icon.style.cssText = 'font-size:28px;color:#138a36;background:rgba(19,138,54,0.12);width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:10px;';
    const title = document.createElement('div');
    title.style.cssText = 'font-weight:700;font-size:18px';
    title.textContent = 'Başvuru Alındı';
    header.appendChild(icon);
    header.appendChild(title);

    // Message paragraph
    const paragraph = document.createElement('p');
    paragraph.style.cssText = 'margin:8px 0 16px;line-height:1.5;color:#163a3a';
    paragraph.textContent = message;

    // Actions
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:8px;justify-content:flex-end;';
    const okBtn = document.createElement('button');
    okBtn.textContent = 'Tamam';
    okBtn.style.cssText = 'background:#138a36;color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer;font-weight:600';
    okBtn.onclick = () => { try { overlay.remove(); } catch (e) {} };
    const closeSmall = document.createElement('button');
    closeSmall.textContent = 'Kapat';
    closeSmall.style.cssText = 'background:transparent;border:1px solid #e6eef0;padding:8px 12px;border-radius:8px;cursor:pointer';
    closeSmall.onclick = () => { try { overlay.remove(); } catch (e) {} };
    actions.appendChild(closeSmall);
    actions.appendChild(okBtn);

    modal.appendChild(header);
    modal.appendChild(paragraph);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Auto close after 5s
    setTimeout(() => { try { overlay.remove(); } catch (e) {} }, 5000);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Navbar yüksekliği
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }
}

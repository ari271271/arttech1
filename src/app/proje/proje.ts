import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Standalone component'te gerekli

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;

  shortDescription?: string; // ... mesajınınn devamını tutar 
  isExpanded: boolean; // Kartın açık olup olmadığını takip eder
}

@Component({
  selector: 'app-proje',
  standalone: true, // ✅ Bu çok önemli! Module yoksa bu satır şart
  imports: [CommonModule], // ✅ *ngFor ve *ngIf gibi yapılar için gerekli
  templateUrl: './proje.html',
  styleUrls: ['./proje.css']
})
export class Proje implements AfterViewInit {
  constructor(private el: ElementRef) {}

  projects: Project[] = [
    {
      id: 1,
      title: 'SKYCLEAN',
      description: 'SkyClean şehirlerdeki hava kirliliğini azaltmak için sürdürülebilir bir çözümdür.',
      imageUrl: 'image1.jpg',
      isExpanded: false
    },
    {
      id: 2,
      title: 'AEROWAVE',
      description: 'AeroWave modern hava araçları için yenilikçi anten teknolojisidir.',
      imageUrl: 'image2.jpg',
      isExpanded: false
    },
    {
      id: 3,
      title: 'X SOUND',
      description: 'Xsound yapay zekâ destekli sensörleriyle hem eğlenceyi hem de güvenliği bir arada sunan akıllı kulaklık teknolojisidir.',
      imageUrl: 'image3.jpg',
      isExpanded: false
    },
    {
      id: 4,
      title: 'SKYQUARD',
      description: 'Skyquard yenilenebilir enerjiyle çalışan yapay zekâ destekli gözetleme sistemiyle orman yangınlarını erken tespit eden akıllı bir çevre koruma çözümüdür.',
      imageUrl: 'image4.jpg',
      isExpanded: false
    },
  ];

  readonly MAX_LENGTH = 150; // proje hakkında yazılan metinin max karakter sınırı

    // ✅ Yeni Fonksiyon: Metin durumunu açıp kapatır
   toggleDescription(project: Project): void {    if (project && typeof project.isExpanded !== 'undefined') {
        project.isExpanded = !project.isExpanded;
    } else {
        // Konsola hata yazdır, böylece nerede sorun olduğunu görebiliriz.
        console.error('Proje nesnesi eksik veya isExpanded alanı tanımsız.', project);
    }
  }

//metin uzunsa saklamak için
  ngOnInit(): void {
    this.projects.forEach(project => {
      // isExpanded başlangıçta false olarak ayarlanır (kapalı)
      project.isExpanded = false; 

      if (project.description.length > this.MAX_LENGTH) {
        // Metin uzunsa kısalt
        project.shortDescription = project.description.substring(0, this.MAX_LENGTH) + '...';
      } else {
        // Metin kısa ise tamamını göster
        project.shortDescription = project.description;
      }
    });
  }
 

  ngAfterViewInit(): void {
    const cards: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('animated');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (cards.length > 0) {
      cards[0].classList.add('animated');
    }

    cards.forEach(c => observer.observe(c));
  }
}

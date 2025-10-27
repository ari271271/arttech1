import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';




interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags?: string[];
  shortDescription?: string;
  isExpanded: boolean;
  status?: 'active' | 'completed' | 'planning';
}

@Component({
  selector: 'app-proje',
  standalone: true, // standalne kullanıyoruz projede 
  imports: [RouterModule, CommonModule],  //  *ngFor ve *ngIf gibi yapılar için gerekli
  templateUrl: './proje.html',
  styleUrls: ['./proje.css']
})
export class Proje implements AfterViewInit {
  constructor(private el: ElementRef) {}

  projects: Project[] = [
    {
      id: 1,
      title: 'SKYCLEAN',
      description: 'SkyClean, şehirlerdeki hava kirliliğini azaltmak için geliştirilen devrimci bir çevre teknolojisidir. Akıllı filtre sistemleri ve IoT sensörleri kullanarak hava kalitesini gerçek zamanlı olarak izler ve iyileştirir. Sürdürülebilir enerji kaynaklarıyla çalışan bu sistem, şehir plancıları ve belediyeler için ideal bir çözüm sunar.',
      imageUrl: 'skyclean_image.jpg',
      category: 'Çevre Teknolojisi',
      tags: ['IoT', 'Hava Kalitesi', 'Sürdürülebilirlik', 'Akıllı Şehir'],
      status: 'active',
      isExpanded: false
    },
    {
      id: 2,
      title: 'AEROWAVE',
      description: 'AeroWave, modern hava araçları için geliştirilen yeni nesil anten teknolojisidir. Yüksek frekans band genişliği ve düşük enerji tüketimiyle öne çıkan bu teknoloji, insansız hava araçlarında uzun menzilli iletişim sağlar. Havacılık sektöründe güvenilir ve etkili iletişim çözümleri sunar.',
      imageUrl: 'aerowave_image.jpg',
      category: 'Havacılık',
      tags: ['Anten', 'İletişim', 'İHA', 'RF Teknolojisi'],
      status: 'active',
      isExpanded: false
    },
    {
      id: 3,
      title: 'X SOUND',
      description: 'XSound, yapay zeka destekli sensörleriyle hem eğlenceyi hem de güvenliği bir arada sunan akıllı kulaklık teknolojisidir. Çevre seslerini analiz ederek kullanıcıyı potansiyel tehlikeler konusunda uyarır, aynı zamanda yüksek kaliteli ses deneyimi sunar. Sporcular, işçiler ve günlük kullanıcılar için özel olarak tasarlanmıştır.',
      imageUrl: 'xsound_image.jpg',
      category: 'Wearable Tech',
      tags: ['Yapay Zeka', 'Ses Teknolojisi', 'Güvenlik', 'Akıllı Cihaz'],
      status: 'completed',
      isExpanded: false
    },
    {
      id: 4,
      title: 'SKYGUARD',
      description: 'SkyGuard, yenilenebilir enerjiyle çalışan yapay zeka destekli gözetleme sistemiyle orman yangınlarını erken tespit eden akıllı bir çevre koruma çözümüdür. Termal kameralar, duman sensörleri ve makine öğrenmesi algoritmaları kullanarak yangın riskini önceden tespit eder ve otomatik alarm sistemleri ile hızlı müdahale sağlar.',
      imageUrl: 'skyquard_image.jpg',
      category: 'Çevre Koruma',
      tags: ['Yapay Zeka', 'Yangın Tespiti', 'Gözetleme', 'Erken Uyarı'],
      status: 'planning',
      isExpanded: false
    },
  ];

  readonly MAX_LENGTH = 120; // proje hakkında yazılan metinin max karakter sınırı

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

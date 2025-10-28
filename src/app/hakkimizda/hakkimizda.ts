import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
    imports: [RouterModule, CommonModule], 
 templateUrl: './hakkimizda.html',
    styleUrls: ['./hakkimizda.css'] 
})
export class Hakkimizda {
  team = [
    { name: "BAYRAM BALA", title: "Danışman Hocamız", photo: "/varsayilan.jpg" },
    { name: "Yunus Ethem TAŞ", title: "CEO (Chief Executive Officer)", photo: "/Yunus.jpeg" },
    { name: "Nursezen SAĞDIÇ", title: "COO (Chief Operating Officer)", photo: "/Nursezen.jpeg" },
    { name: "Sena BULUT", title: "Finans Direktörü", photo: "/varsayilan.jpg" },
    { name: "Eda GÖZLÜKLÜ", title: "Endüstriyel Süreç ve Raporlama Koordinatörü", photo: "/Eda.jpeg" },
    { name: "Ezgi GEZEZ", title: "Sosyal Medya Sorumlusu", photo: "/Ezgi.jpeg" },
    { name: "Sidra KAYA", title: "Sosyal Medya Sorumlusu", photo: "/varsayilan.jpg" },
    { name: "Ahmet ADNAN", title: "Yazılım Geliştirici & Teknik Destek", photo: "/Ahmet.jpeg" },
    { name: "Zemzem BOYLUĞ", title: "Yazılım Kaptanı", photo: "/Zemzem.jpeg" },
    { name: "Fehmi SEZER", title: "Elektronik Kaptanı", photo: "/varsayilan.jpg" },
    { name: "Bumin Kağan KURT", title: "Mekanik Kaptanı", photo: "/varsayilan.jpg" },
    { name: "Orhan YAŞAR", title: "Elektronik Asistanı", photo: "/Orhan.jpeg" },
    { name: "Mustafa YILDIRIMER", title: "Elektrik-Elektronik Destek Uzmanı", photo: "/Mustafa.jpeg" },
    { name: "Büşra KURT", title: "Hatay Temsilcisi", photo: "/varsayilan.jpg" },
    { name: "Ezel İLHAN", title: "Laboratuvar Destek Üyesi", photo: "/Ezel.jpeg" },
    { name: "Bedriye TATLI", title: "Elektrik-Elektronik Proje Asistanı", photo: "/Bedriye.jpeg" },
    { name: "Yağmur KAYA", title: "İnsan Kaynakları", photo: "/varsayilan.jpg" }
  ];

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/varsayilan.jpg';
  }
}


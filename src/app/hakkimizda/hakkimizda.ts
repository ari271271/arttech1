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
export class Hakkimizda {   team = [
    { name: "BAYRAM BALA", title: "Danışman Hocamız", photo: "/BayramBala.jpeg" },
  { name: "Yunus Ethem TAŞ", title: "CEO (Chief Executive Officer)", photo: "/Yunus.jpeg" },
  { name: "Nursezen SAĞDIÇ", title: "COO (Chief Operating Officer)", photo: "/Nursezen.jpeg" },
  { name: "Sena BULUT", title: "Finans Direktörü", photo: "/Sena.jpeg" },
  { name: "Eda GÖZLÜKLÜ", title: "Endüstriyel Süreç ve Raporlama Koordinatörü", photo: "/Eda.jpeg" },
  { name: "Ezgi GEGEZ", title: "Sosyal Medya Sorumlusu", photo: "/Ezgi.jpeg" },
  { name: "Sidra AĞAOĞLU", title: "Sosyal Medya Sorumlusu", photo: "/Sidra.jpg" },
  { name: "Ahmet ADNAN MANAF", title: "Yazılım Geliştirici & Teknik Destek", photo: "/Ahmet.jpeg" },
  { name: "Zemzem BOYLUĞ", title: "Yazılım Kaptanı", photo: "/Zemzem.jpeg" },
  { name: "Fehmi SEZER", title: "Elektronik Kaptanı", photo: "/Fehmi.jpeg" },
  { name: "Bumin Kağan DOĞAN", title: "Mekanik Kaptanı", photo: "/Bumin.jpeg" },
  { name: "Muhammed Orhan YAŞAR", title: "Elektronik Asistanı (Elektronik Mühendisliği Öğrencisi)", photo: "/Orhan.jpeg" },
  { name: "Mustafa YILDIRIMER", title: "Elektrik-Elektronik Destek Uzmanı", photo: "/Mustafa.jpeg" },
  { name: "Büşra KURT", title: "Hatay Temsilcisi", photo: "/Busra.jpeg" },
  { name: "Ezel ILHAN", title: "Laboratuvar Destek Üyesi", photo: "/Ezel.jpeg" },
  { name: "Bedriye TATLI", title: "Elektrik-Elektronik Proje Asistanı", photo: "/Bedriye.jpeg" },
  { name: "Yağmur ÇINAR", title: "Insan kaynakları", photo: "/Yagmur.jpeg" },
  { name: "Merve AKYÜZ", title: "Proje Müdürü", photo: "/Merve.jpeg"}
];
onImageError(event: Event) {
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = '/varsayilan.jpg';
}}


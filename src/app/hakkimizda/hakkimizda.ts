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
  
  // Dialog (Diyalog) değişkenleri - Yerel taahhüdünüzden korundu
  isDialogOpen: boolean = false;
  selectedMember: any = null;

  // EKİP ÜYELERİ LİSTESİ (İstenmeyen üyeler: Sidra, Fehmi, Bedriye, Bumin çıkarıldı)
  team = [
    { 
        name: "Prof. Dr. Ahmet Ayhan KOYUNCU ", 
        title: "Topluluk Danışmanımız ", 
        photo: "", 
        dialogInfo: "Bilimsel birikimi ve stratejik öngörüsüyle topluluğumuza yön veren, ArtTech’in akademik pusulası niteliğindeki değerli danışmanımızdır. Çalışmalarımızda nitelik, etik sorumluluk ve yenilikçi düşünceyi esas alarak gençlerin yetkin bireyler olarak gelişim göstermelerine güçlü bir zemin hazırlamaktadır.." 
    }, 
    { 
        name: "Doç. Dr. Ipek ATIK", 
        title: "Proje Danışmanımız ", 
        photo: "/IpekATIK.jpeg", 
        dialogInfo: "Teknolojik inovasyonlar ve proje yönetimi alanındaki derin uzmanlığıyla ArtTech projelerine yön vermektedir. Yaratıcı fikirlerin somut, uygulanabilir ve sürdürülebilir projelere dönüşmesi sürecinde ekip üyelerine ilham vererek, onların potansiyellerini en üst düzeye çıkarmalarına katkı sağlamaktadır." 
    },
    { 
        name: "Yunus Ethem TAŞ", 
        title: "Topluluk Başkanı", 
        photo: "/Yunus.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech Şirket ve Topluluk Başkanı olarak sanat ve teknolojiyi birleştirme vizyonuyla hareket etmektedir. Ekibin motivasyonunu en üst seviyede tutarak, şirket ve topluluğun global hedeflere ulaşması için stratejik kararlar alır ve yenilikçi bir çalışma kültürü oluşturur." 
    },
    { 
        name: "Nursezen SAĞDIÇ", 
        title: "Başkan Yardımcısı", 
        photo: "/Nursezen.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech’te Başkan Yardımcısı olarak görev almaktayım. Şirket ve topluluğumuzun operasyonel süreçlerini yönetiyor, verimliliği arttırmak ve sürdürülebilir büyümeyi desteklemek adına stratejik çalışmalar yürütüyorum." 
    },
    { 
        name: "Sena BULUT", 
        title: "Finans Direktörü", 
        photo: "/Sena.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te CFO (Chief Financial Officer) görevini yürütüyorum Şirketin finansal stratejilerini yönetir, sürdürülebilir büyüme ve verimlilik hedefleri doğrultusunda çalışmalar yürütüyorum." 
    },
    { 
        name: "Eda GÖZLÜKLÜ", 
        title: "Endüstriyel Süreç ve Raporlama Koordinatörü", 
        photo: "/Eda.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te projelerin endüstriyel standartlara uygunluğunu ve süreçlerin şeffaflığını sağlamaktan sorumluyumdur. Detaylı raporlama ve sürekli iyileştirme prensipleriyle ArtTech projelerinin profesyonel kalitesini ve verimliliğini maksimize ederim." 
    },
    { 
        name: "Ahmet Eren EBE", 
        title: "Sponsorluk İlişkileri Yöneticisi", 
        photo: "/AhmetEren.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te sponsorluk İlişkileri Yöneticisi Olarak Görev Yapmaktayım. Görevim Bizim Projelerimizi En Doğru Şekilde Temsil Edip Sponsorlarla Sürekli İletişimde Olan, Onlara İhtiyaçlarımızı, İlerlememizi Ve Vizyonumuzu Aktaran Kişiyim. Ekip Arkadaşlarım Sahada Çalışırken, Bende Dışarıda Ekibin Sesi Oluyorum."
    },
    { 
        name: "Ezgi GEGEZ", 
        title: "Sosyal Medya Koordinatörü", 
        photo: "/Ezgi.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te Sosyal Medya Koordinatörü olarak görev alıyorum. İçerik üretimi ve fotoğrafçılıkla ilgileniyorum. Sosyal medya trendlerini takip ederek, etkili ve özgün içerikler oluşturmayı hedefliyorum." 
    },
    // Sidra AĞAOĞLU ÇIKARILDI
    { 
        name: "Ahmet ADNAN MANAF", 
        title: "Yazılım Kaptanı", 
        photo: "/Ahmet.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. ArtTech'te yazılım projelerinde teknik uzmanlık sağlıyor ve ekibe destek oluyorum. Karşılaştığımız teknik zorluklara pratik ve yenilikçi çözümler getirerek projelerin sorunsuz bir şekilde ilerlemesini sağlıyorum." 
    },
    // zemzem boyluğ ÇIKARILDI
      { 
        name: "Fehmi SEZER", 
        title: "Elektronik Kaptanı", 
        photo: "/Fehmi.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Elektrik-Elektronik Mühendisliği öğrencisiyim. ArtTech bünyesinde Elektronik Kaptanı olarak görev yapmaktayım. Elektronik devre tasarımı, sistem analizi, otomasyon teknolojileri ile İHA ve SİHA sistemleri alanlarında aktif olarak çalışıyor; mühendislik vizyonumu liderlik anlayışıyla birleştirerek projelere yön veriyorum. Akademik bilgi birikimimi saha deneyimiyle harmanlayarak yenilikçi, sürdürülebilir ve yüksek verimlilik odaklı çözümler üretmeyi hedefliyorum." 
    },
    // Bumin Kağan DOĞAN ÇIKARILDI
    { 
        name: "Muhammed Orhan YAŞAR", 
        title: "Elektronik Asistanı ", 
        photo: "/Orhan.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te Elektronik Asistanı olarak görev yapmaktayım. Elektronik devre tasarımı, sistem analizi ve otomasyon teknolojileri üzerine çalışıyor; mühendislik alanındaki akademik bilgilerimi sahadaki uygulamalarla birleştirerek projelere katkı sağlamayı hedefliyorum." 
    },
    //mustafa yıldırımer ÇIKARILDI
    { 
        name: "Büşra KURT", 
        title: "Hatay Temsilcisi", 
        photo: "/Busra.jpeg", 
        dialogInfo: "İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. ArtTech Hatay Temsilcisi olarak, topluluğumuzun bölgede daha fazla görünür olmasına katkı sağlamaya çalışıyorum. Bölgesel projelerde, ArtTech'in vizyonunu ve misyonunu benimseyerek topluluğumuzun etki alanını genişletiyorum." 
    },
    // ezel ilhan ÇIKARILDI 
    // Bedriye TATLI ÇIKARILDI
    // yağmur çınar ÇIKARILDI
    { 
        name: "Merve AKYÜZ", 
        title: "Proje Müdürü", 
        photo: "/Merve.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te, topluluğun ana projelerinin zamanında ve bütçe dahilinde tamamlanmasını sağlıyorum. Mükemmel organizasyon ve iletişim becerilerimle proje ekiplerini başarıya ulaştırıyorum." 
    }
  ];

  // Resim yüklenemediğinde varsayılan resmi gösteren fonksiyon
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/varsayilan.jpg';
  }

  // Dialog açma işlevi
  openDialog(member: any) {
    this.selectedMember = member;
    this.isDialogOpen = true;
    document.body.style.overflow = 'hidden';
  }

  // Dialog kapatma işlevi
  closeDialog() {
    this.isDialogOpen = false;
    this.selectedMember = null;
    document.body.style.overflow = 'auto';
  }
}
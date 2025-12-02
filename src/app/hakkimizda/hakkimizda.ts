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
        name: "Dr. Öğr. Üyesi Bayram BALA", 
        title: "Topluluk Danışmanımız ", 
        photo: "/BayramBala.jpeg", 
        dialogInfo: "Akademik derinliği ve vizyoner yaklaşımıyla ArtTech'in bilimsel yol haritasını çizen hocamızdır. Topluluğun her projesinde kaliteyi ve etik değerleri ön planda tutarak, gençlerin potansiyelini maksimum düzeyde kullanmalarına rehberlik eder." 
    },
    { 
        name: "Doç. Dr. Ipek ATIK", 
        title: "Proje Danışmanımız ", 
        photo: "/IpekATIK.jpeg", 
        dialogInfo: "Teknolojik inovasyonlar ve proje yönetimi konusundaki uzmanlığıyla ArtTech projelerine yön vermektedir. Yaratıcı fikirlerin somut, uygulanabilir ve sürdürülebilir projelere dönüşmesi için ekip üyelerimize ilham kaynağı olmaktadır." 
    },
    { 
        name: "Yunus Ethem TAŞ", 
        title: "ArtTech Şirket ve Topluluk Başkanı", 
        photo: "/Yunus.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech Şirket ve Topluluk Başkanı olarak sanat ve teknolojiyi birleştirme vizyonuyla hareket etmektedir. Ekibin motivasyonunu en üst seviyede tutarak, şirket ve topluluğun global hedeflere ulaşması için stratejik kararlar alır ve yenilikçi bir çalışma kültürü oluşturur." 
    },
    { 
        name: "Nursezen SAĞDIÇ", 
        title: "Başkan Yardımcısı", 
        photo: "/Nursezen.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech’te Başkan Yardımcısı olarak görev almaktayım. Şirket ve topluluğumuzun operasyonel süreçlerini yönetiyor, verimliliği arttırmak ve sürdürülebilir büyümeyi desteklemek adına stratejik çalışmalar yürütüyorum. ." 
    },
    { 
        name: "Sena BULUT", 
        title: "Finans Direktörü", 
        photo: "/Sena.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te CFO (Chief Financial Officer) görevini yürütüyorum Şirketin finansal stratejilerini yönetir, sürdürülebilir büyüme ve verimlilik hedefleri doğrultusunda çalışmalar yürütüyorum." 
    },
    { 
        name: "Eda GÖZLÜKLÜ", 
        title: "Endüstriyel Süreç ve Raporlama Koordinatörü", 
        photo: "/Eda.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te projelerin endüstriyel standartlara uygunluğunu ve süreçlerin şeffaflığını sağlamaktan sorumluyumdur. Detaylı raporlama ve sürekli iyileştirme prensipleriyle ArtTech projelerinin profesyonel kalitesini ve verimliliğini maksimize ederim." 
    },
    { 
        name: "Ahmet Eren Ebe", 
        title: "Sponsorluk İlişkileri Yöneticisi", 
        photo: "/AhmetEren.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te sponsorluk İlişkileri Yöneticisi Olarak Görev Yapmaktayım. Görevim Bizim Projelerimizi En Doğru Şekilde Temsil Edip Sponsorlarla Sürekli İletişimde Olan, Onlara İhtiyaçlarımızı, İlerlememizi Ve Vizyonumuzu Aktaran Kişiyim. Ekip Arkadaşlarım Sahada Çalışırken, Bende Dışarıda Ekibin Sesi Oluyorum."
    },
    { 
        name: "Ezgi GEGEZ", 
        title: "Sosyal Medya Koordinatörü", 
        photo: "/Ezgi.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te Sosyal Medya Koordinatörü olarak görev alıyorum. İçerik üretimi ve fotoğrafçılıkla ilgileniyorum. Sosyal medya trendlerini takip ederek, etkili ve özgün içerikler oluşturmayı hedefliyorum." 
    },
    // Sidra AĞAOĞLU ÇIKARILDI
    { 
        name: "Ahmet ADNAN MANAF", 
        title: "Yazılım Geliştirici & Teknik Destek", 
        photo: "/Ahmet.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. ArtTech'te yazılım projelerinde teknik uzmanlık sağlıyor ve ekibe destek oluyorum. Karşılaştığımız teknik zorluklara pratik ve yenilikçi çözümler getirerek projelerin sorunsuz bir şekilde ilerlemesini sağlıyorum." 
    },
    { 
        name: "Zemzem BOYLUĞ", 
        title: "Yazılım Kaptanı", 
        photo: "/Zemzem.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. ArtTech'te yazılım ekibinin lideri olarak, kodlama standartlarını belirliyor ve teknik mimariyi şekillendiriyorum. Ekip üyelerinin gelişimine odaklanarak, ArtTech'in yazılım çözümlerinin en yüksek kaliteye ulaşmasını sağlıyorum." 
    },
    // Fehmi SEZER ÇIKARILDI
    // Bumin Kağan DOĞAN ÇIKARILDI
    { 
        name: "Muhammed Orhan YAŞAR", 
        title: "Elektronik Asistanı ", 
        photo: "/Orhan.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te Elektronik Asistanı olarak görev yapmaktayım. Elektronik devre tasarımı, sistem analizi ve otomasyon teknolojileri üzerine çalışıyor; mühendislik alanındaki akademik bilgilerimi sahadaki uygulamalarla birleştirerek projelere katkı sağlamayı hedefliyorum." 
    },
    { 
        name: "Mustafa YILDIRIMER", 
        title: "Elektrik-Elektronik Destek Uzmanı", 
        photo: "/Mustafa.jpeg", 
        dialogInfo: " Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te özel elektrik ve elektronik konularda derinlemesine destek sağlar. Karmaşık teknik sorunları çözme yeteneği ile projelere teknik güvenilirlik katarım." 
    },
    { 
        name: "Büşra KURT", 
        title: "Hatay Temsilcisi", 
        photo: "/Busra.jpeg", 
        dialogInfo: "İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. ArtTech Hatay Temsilcisi olarak, topluluğumuzun bölgede daha fazla görünür olmasına katkı sağlamaya çalışıyorum. Bölgesel projelerde, ArtTech'in vizyonunu ve misyonunu benimseyerek topluluğumuzun etki alanını genişletiyorum." 
    },
    { 
        name: "Ezel ILHAN", 
        title: "Laboratuvar Destek Üyesi", 
        photo: "/Ezel.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Tıbbi Laboratuvar Teknikleri öğrencisiyim. ArtTech'te Laboratuvar Destek Üyesi olarak görev alıyorum. Laboratuvar ortamında teknik bilgi ve pratiklerimle destek sunuyorum. ." 
    },
    // Bedriye TATLI ÇIKARILDI
    { 
        name: "Yağmur ÇINAR", 
        title: "Insan kaynakları", 
        photo: "/Yagmur.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Elektrik Elektronik Mühendisliği öğrencisiyim. ArtTech'te insan kaynakları süreçlerini yönetiyor, yeni üye alımı ve ekip motivasyonuyla ilgileniyorum. ArtTech'in güçlü ve uyumlu bir ekibe sahip olması için stratejik çalışmalar yürütüyorum." 
    },
    { 
        name: "Merve AKYÜZ", 
        title: "Proje Müdürü", 
        photo: "/Merve.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech'te, topluluğun ana projelerinin zamanında ve bütçe dahilinde tamamlanmasını sağlıyorum. Mükemmel organizasyon ve iletişim becerilerimle proje ekiplerini başarıya ulaştırıyorum." 
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
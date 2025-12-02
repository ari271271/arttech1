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
        title: "CEO (Chief Executive Officer)", 
        photo: "/Yunus.jpeg", 
        dialogInfo: "ArtTech'in kurucusu ve lideri olarak, sanat ve teknolojiyi birleştirme vizyonuyla hareket etmektedir. Ekibin motivasyonunu en üst seviyede tutarak, şirketin global hedeflere ulaşması için stratejik kararlar alır ve yenilikçi bir çalışma kültürü oluşturur." 
    },
    { 
        name: "Nursezen SAĞDIÇ", 
        title: "Başkan Yardımcısı", 
        photo: "/Nursezen.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisiyim. ArtTech’te Başkan Yardımcısı olarak görev almaktayım. Şirketimizin operasyonel süreçlerini yönetiyor, verimliliği artırmak ve sürdürülebilir büyümeyi desteklemek adına stratejik çalışmalar yürütüyorum. Sistematik düşünme, süreç iyileştirme ve yenilikçi operasyon yönetimi yaklaşımlarıyla şirketin işleyişini daha etkili ve optimize bir hâle getirmeyi hedefliyorum. Kendimi geliştirmeyi, öğrenmeyi ve her yaptığım işte en iyisini ortaya koymayı önemsiyorum. ArtTech’in gelişen vizyonuna değer katmak ve şirketin geleceğine yön veren güçlü bir operasyonel yapı oluşturmak için tutkuyla çalışıyorum." 
    },
    { 
        name: "Sena BULUT", 
        title: "Finans Direktörü", 
        photo: "/Sena.jpeg", 
        dialogInfo: "Gaziantep İslâm Bilim Ve Teknoloji Üniversitesi Endüstri Mühendisliği öğrencisi olarak ArtTech'de CFO (Chief Financial Officer) görevini yürütmektedir. Şirketin finansal stratejilerini yönetir, sürdürülebilir büyüme ve verimlilik hedefleri doğrultusunda çalışmalar yürütür. Analitik düşünme, stratejik planlama ve inovatif finansal yaklaşımlarla şirketin geleceğine yön vermeyi hedefleyen Sena, sürekli gelişime ve yaptığı her işte içtenlikle ilerlemeye önem verir." 
    },
    { 
        name: "Eda GÖZLÜKLÜ", 
        title: "Endüstriyel Süreç ve Raporlama Koordinatörü", 
        photo: "/Eda.jpeg", 
        dialogInfo: "Projelerin endüstriyel standartlara uygunluğunu ve süreçlerin şeffaflığını sağlamaktan sorumludur. Detaylı raporlama ve sürekli iyileştirme prensipleriyle ArtTech projelerinin profesyonel kalitesini ve verimliliğini maksimize eder." 
    },
    { 
        name: "Ahmet Eren Ebe", 
        title: "Sponsorluk İlişkileri Yöneticisi", 
        photo: "/AhmetEren.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Elektrik-Elektronik Mühendisliği 1. Sınıf Öğrencisiyim. ArtTech Bünyesinde Sponsorluk İlişkileri Yöneticisi Olarak Görev Yapmaktayım. Görevim Bizim Projelerimizi En Doğru Şekilde Temsil Edip Sponsorlarla Sürekli İletişimde Olan, Onlara İhtiyaçlarımızı, İlerlememizi Ve Vizyonumuzu Aktaran Kişiyim. Ekip Arkadaşlarım Sahada Çalışırken, Bende Dışarıda Ekibin Sesi Oluyorum. Bu Rolde, Güven Ve Profesyonelliği Yansıtarak, Fırsatları Takip Etmek Ve Güçlü İş Birlikleri Kurmak Benim Görevimdir."
    },
    { 
        name: "Ezgi GEGEZ", 
        title: "Sosyal Medya Koordinatörü", 
        photo: "/Ezgi.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi, 3. sınıf Endüstri Mühendisliği öğrencisiyim. Kendimi her alanda geliştirmeyi hedefliyor ve bu doğrultuda çeşitli alanlarda çaba sarf ediyorum. Şu anda ArtTech topluluğunda Sosyal Medya Koordinatörü olarak görev alıyorum. İçerik üretimi ve fotoğrafçılıkla ilgileniyor, yaratıcı projelerde aktif rol almayı seviyorum. Bu süreçte, hem kişisel hem de profesyonel anlamda kendimi daha da ileriye taşımayı amaçlıyorum." 
    },
    // Sidra AĞAOĞLU ÇIKARILDI
    { 
        name: "Ahmet ADNAN MANAF", 
        title: "Yazılım Geliştirici & Teknik Destek", 
        photo: "/Ahmet.jpeg", 
        dialogInfo: "Yazılım projelerinde teknik uzmanlığıyla çözümler üretir ve ekibe destek olur. Karşılaşılan teknik zorluklara pratik ve yenilikçi yaklaşımlar getirerek projelerin kesintisiz ilerlemesini sağlar." 
    },
    { 
        name: "Zemzem BOYLUĞ", 
        title: "Yazılım Kaptanı", 
        photo: "/Zemzem.jpeg", 
        dialogInfo: "Yazılım ekibinin lideri olarak, kodlama standartlarını belirler ve teknik mimariye yön verir. Ekip üyelerinin gelişimine odaklanarak, ArtTech'in tüm yazılım çözümlerinin en yüksek kalitede olmasını sağlar." 
    },
    // Fehmi SEZER ÇIKARILDI
    // Bumin Kağan DOĞAN ÇIKARILDI
    { 
        name: "Muhammed Orhan YAŞAR", 
        title: "Elektronik Asistanı (Elektronik Mühendisliği Öğrencisi)", 
        photo: "/Orhan.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Elektrik-Elektronik Mühendisliği 1. sınıf öğrencisiyim. ArtTech bünyesinde Elektronik Asistanı olarak görev yapmaktayım. Elektronik devre tasarımı, sistem analizi ve otomasyon teknolojileri üzerine çalışıyor; mühendislik alanındaki akademik bilgilerimi sahadaki uygulamalarla birleştirerek projelere katkı sağlamayı hedefliyorum. Yenilikçi teknolojilere ilgi duyan, araştırmacı ve çözüm odaklı bir mühendis adayı olarak, ArtTech’in teknolojiye yön veren vizyonuna katkıda bulunmak benim için büyük bir motivasyon kaynağıdır." 
    },
    { 
        name: "Mustafa YILDIRIMER", 
        title: "Elektrik-Elektronik Destek Uzmanı", 
        photo: "/Mustafa.jpeg", 
        dialogInfo: "Özel elektrik ve elektronik konularda derinlemesine destek sağlar. Karmaşık teknik sorunları çözme yeteneği ile projelere teknik güvenilirlik katar." 
    },
    { 
        name: "Büşra KURT", 
        title: "Hatay Temsilcisi", 
        photo: "/Busra.jpeg", 
        dialogInfo: "ArtTech'i Hatay bölgesinde temsil eder ve yerel etkinlikleri organize eder. Bölgesel projelerde ArtTech'in vizyonunu ve misyonunu yayarak topluluğun etki alanını genişletir." 
    },
    { 
        name: "Ezel ILHAN", 
        title: "Laboratuvar Destek Üyesi", 
        photo: "/Ezel.jpeg", 
        dialogInfo: "Gaziantep İslam Bilim ve Teknoloji Üniversitesi Tıbbi Laboratuvar Teknikleri bölümünde öğrenim görmekteyim ve Art Tech'te Laboratuvar Destek Üyesi olarak görev alıyorum. Laboratuvar ortamında teknik bilgi ve pratiklerimle destek sunuyorum. Ayrıca döngüsel ekonomi alanındaki bilgi birikimimi gençlerle yapılan çalışmalarda paylaşarak sürdürülebilir farkındalık oluşmasına katkı sağlıyorum. Enerjim ve motivasyonumla bulunduğum her ekibe değer katmayı hedefliyorum." 
    },
    // Bedriye TATLI ÇIKARILDI
    { 
        name: "Yağmur ÇINAR", 
        title: "Insan kaynakları", 
        photo: "/Yagmur.jpeg", 
        dialogInfo: "İnsan kaynakları süreçlerini yönetir, yeni üye alımı ve ekip motivasyonundan sorumludur. ArtTech'in güçlü ve uyumlu bir ekibe sahip olması için stratejik çalışmalar yürütür." 
    },
    { 
        name: "Merve AKYÜZ", 
        title: "Proje Müdürü", 
        photo: "/Merve.jpeg", 
        dialogInfo: "Topluluğun ana projelerinin zamanında ve bütçe dahilinde tamamlanmasını sağlar. Mükemmel organizasyon ve iletişim becerileriyle proje ekiplerini başarıya ulaştırır." 
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
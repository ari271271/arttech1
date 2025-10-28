import { Component } from '@angular/core';

@Component({
  selector: 'app-yarismalar',
  imports: [],
  templateUrl: './yarismalar.html',
  styleUrls: ['./yarismalar.css']
})


export class Yarismalar {

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 120; // Navbar yüksekliği
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  }

}

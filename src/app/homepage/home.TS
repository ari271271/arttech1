import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Homepage {
  images = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg'];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => this.next(), 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
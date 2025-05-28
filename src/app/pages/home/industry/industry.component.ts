import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industry',
  imports: [CommonModule,RouterLink],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.scss'
})
export class IndustryComponent {
 
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY > 10;
  }

  menuOpen = false;
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    console.log('Toggle Menu', this.menuOpen);
  }
}

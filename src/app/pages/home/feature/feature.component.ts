import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature',
  imports: [RouterModule,CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY > 10;
  }

  menuOpen = false;
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    console.log('Menu Toggle:', this.menuOpen)
  }

}

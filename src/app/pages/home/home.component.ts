import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY > 100;
  }
   
  
  menuOpen = false;
  toggleMenu(){
   this.menuOpen = !this.menuOpen;
   console.log("Menu Toggled:", this.menuOpen)
  }

  Alert(){
    alert('WellCome to Feature-Page');
  }

  Message(){
    alert('WellCome to Industry-Page');
  }

  
  companyMessage(){
  alert('WellCome to Company-Page');
  }
}

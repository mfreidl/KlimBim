import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.isScrolled = false;
  }

  isScrolled: boolean;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    let element = document.querySelector('#header') as HTMLElement;
    let offset = element.offsetHeight

    if (window.scrollY > 100) {
      element.style.background = '#73073EE5'
      element.style.height = '70px';

    } else {
      element.style.background = 'transparent';
      element.style.height = '90px';
    }
  }
}

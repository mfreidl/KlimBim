import { Component, OnInit } from '@angular/core';
const glightbox = require('glightbox');

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() {
  }

  items: Array<{id: string}> = [{id: ""},{id: ""},{id: ""},{id: ""},{id: ""},{id: ""}];

  portfolioLightbox:any;
  ngOnInit(){

    this.portfolioLightbox = glightbox({
      selector: '.portfolio-lightbox'
    });

  }

}

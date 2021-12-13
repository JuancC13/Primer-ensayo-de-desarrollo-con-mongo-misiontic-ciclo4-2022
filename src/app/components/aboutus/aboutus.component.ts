import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public web: string;
  

  constructor() {
    this.title = "MEGASWAV";
    this.subtitle = "Su puerta a la era digital";
    this.email = "megaswav_admin@megaswav.com";
    this.web = "https://www.megaswav.com";
  }

  ngOnInit(): void {
  }

}

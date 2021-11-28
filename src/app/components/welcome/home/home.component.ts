import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores esse odit suscipit, consequatur corporis consectetur adipisci porro iure eaque ad eveniet illo quas quo inventore voluptates accusantium ex mollitia."
  constructor() { }

  ngOnInit(): void {
  }

}

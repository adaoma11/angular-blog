import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  imageUrl:string = 'https://img.freepik.com/fotos-gratis/microchip-em-extreme-closeup_125540-4902.jpg?w=900&t=st=1707960668~exp=1707961268~hmac=1230b4acc5036e2fbc1924024a69a0270e65ae81d0b6dbf1e506407d04417705';
  creditsText:string = '';
  title:string = 'Lorem ipsum dolor sit amet';
  text:string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quia provident iste molestias! Adipisci sapiente sunt laborum recusandae.';

  constructor() { }

  ngOnInit(): void {
  }

}

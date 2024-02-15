import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() imageUrl:string = '';
  @Input() creditsUrl:string = '';
  @Input() title:string = '';
  @Input() text:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

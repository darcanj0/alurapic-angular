import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  show = false;
  toggleShow() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit() {
  }

}

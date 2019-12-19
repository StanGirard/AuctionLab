import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeMenuItems = {
    clients: false,
    inventaires: false,
    encheres: false,
    produits: false
  };

  constructor() { }

  ngOnInit() {
  }

  clickOnMenuItem(menuItem: string) {
    this.activeMenuItems[menuItem] = !this.activeMenuItems[menuItem];
  }
}

import { Component, OnInit } from '@angular/core';
import menuGenerator from '../../../../menuGenerator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeMenuItems = {
    dashboard: true,
    clients: false,
    inventaires: false,
    encheres: false,
    produits: false
  };

  menuDatas = menuGenerator();

  constructor() {}



  ngOnInit() {
    console.log(this.menuDatas);
  }

// Handle menu selection
  clickOnMenuItem(menuItem: string) {
    setTimeout(() => {
      for (const key in this.activeMenuItems) {
        if (key !== menuItem) {
          this.activeMenuItems[key] = false;
        } else {
          this.activeMenuItems[key] = !this.activeMenuItems[key];
        }
      }
      let allClose = 1;
      for (const key in this.activeMenuItems) {
        if (this.activeMenuItems[key] === true) {
          allClose = 0;
        }
      }
      if (allClose) {
        this.activeMenuItems.dashboard = true;
      }
    }, 300);

  }
}

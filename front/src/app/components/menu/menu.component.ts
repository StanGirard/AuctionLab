import { Component, OnInit } from "@angular/core";
import menuGenerator from "../../../../menuGenerator";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
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
      let status = false;
      for (const key in this.menuDatas.menus) {
        if (this.menuDatas.menus[key].name !== menuItem) {
          this.menuDatas.menus[key].active = false;
          if (this.menuDatas.menus[key].parent === menuItem) {
            if (!status) {
              this.menuDatas.menus[key].active = !this.menuDatas.menus[key]
                .active;
            }
          }
        } else {
          this.menuDatas.menus[key].active = !this.menuDatas.menus[key].active;
          status = !this.menuDatas.menus[key].active;
        }
      }

      let allClose = 1;
      for (const key in this.menuDatas.menus) {
        if (this.menuDatas.menus[key].active === true) {
          allClose = 0;
        }
      }
      if (allClose) {
        this.menuDatas.menus[0].active = true;
      }
    }, 150);
  }
}

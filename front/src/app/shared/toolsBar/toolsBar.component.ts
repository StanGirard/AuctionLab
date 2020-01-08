import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-bar',
  templateUrl: './toolsBar.component.html',
  styleUrls: ['./toolsBar.component.scss']
})
export class ToolsBarComponent implements OnInit {

  searching = false;
  searchingBarContent = '';

  constructor() { }

  ngOnInit() {
  }

  searchSelection(inside: boolean) {
    if (inside) {
      this.searching = true;
      document.getElementById('searchBar').focus();
    } else {
      this.searching = false;
      this.searchingBarContent = '';
    }
  }

  addSelection() {
    console.log('addClicked');
  }

}

import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service'
@Component({
  selector: 'app-acheteurs',
  templateUrl: './acheteurs.component.html',
  styleUrls: ['./acheteurs.component.scss']
})
export class AcheteursComponent implements OnInit {
  public acheteurs: any;
  constructor(private _ApiService: ApiService) { }

  ngOnInit() {
    this._ApiService.getClients().subscribe(
      data => { this.acheteurs = data;this.acheteurs = this.acheteurs.result.records; console.log(this.acheteurs)},
      err => console.error(err),
      () => console.log('done loading clients')
    )
  }

}

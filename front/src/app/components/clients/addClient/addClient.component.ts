import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.scss']
})
export class AddClientComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();
  public clientTypeChosed = false;
  public clientType = '';

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closed.emit(true);
  }

  chooseClientType(type: string) {
    this.clientType = type;
    this.clientTypeChosed = true;
  }
}

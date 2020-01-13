import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.scss']
})
export class AddClientComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closed.emit(true);
  }

}

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../api.service';

export interface Acheteurs {
  identifier: number;
  denomination: string;
  entreprise: string;
  vip: string;
}

@Component({
  selector: 'app-acheteurs',
  templateUrl: './acheteurs.component.html',
  styleUrls: ['./acheteurs.component.scss']
})

export class AcheteursComponent implements OnInit {

  public acheteurs: any;
  public acheteursTable: Acheteurs[] = [];
  dataSource: MatTableDataSource<Acheteurs>;

  displayedColumns: string[] = ['identifier', 'denomination', 'entreprise', 'vip'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getClients().subscribe(
      data => {
        this.acheteurs = data;
        this.acheteurs = this.acheteurs.result.records;
        console.log(this.acheteurs);
      },
      err => console.error(err),
      () => {
        this.acheteurs.forEach(element => {
          const elementToPush: Acheteurs = {
            identifier : element.identifier,
            denomination : element.denomination,
            entreprise : element.entreprise,
            vip : element.vip
          };
          this.acheteursTable.push(elementToPush);
        });
        this.dataSource = new MatTableDataSource(this.acheteursTable);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

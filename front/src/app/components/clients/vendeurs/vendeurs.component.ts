import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../api.service';

export interface Vendeurs {
  identifier: number;
  denomination: string;
  entreprise: string;
  vip: string;
}

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.scss']
})

export class VendeursComponent implements OnInit {

  public vendeurs: any;
  public vendeursTable: Vendeurs[] = [];
  dataSource: MatTableDataSource<Vendeurs>;

  displayedColumns: string[] = ['identifier', 'denomination', 'entreprise', 'vip'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getClients().subscribe(
      data => {
        this.vendeurs = data;
        this.vendeurs = this.vendeurs.result.records;
        console.log(this.vendeurs);
      },
      err => console.error(err),
      () => {
        this.vendeurs.forEach(element => {
          const elementToPush: Vendeurs = {
            identifier : element.identifier,
            denomination : element.denomination,
            entreprise : element.entreprise,
            vip : element.vip
          };
          this.vendeursTable.push(elementToPush);
        });
        this.dataSource = new MatTableDataSource(this.vendeursTable);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

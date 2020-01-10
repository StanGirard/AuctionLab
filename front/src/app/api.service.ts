import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://ciovwatbbg.execute-api.eu-west-1.amazonaws.com/dev';
  constructor(private httpClient: HttpClient) {}

  public createClients(clients: Clients) {}
  public getClients() {
    return this.httpClient.get(`${this.apiURL}/clients`);
  }
}

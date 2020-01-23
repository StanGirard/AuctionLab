import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from './clients';
import faker from "faker";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://pac9uwxq77.execute-api.eu-west-1.amazonaws.com/dev';
  constructor(private httpClient: HttpClient) {}

  public createClient(){
       let client:any = {
      denomination: faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"),
      entreprise: null,
      acheteur: 1,
      vendeur: faker.random.boolean(),
      vip: faker.lorem.words()
    };
    console.log(client)
    //Generate random number 
    let number = Math.floor((Math.random() * 100000) + 1);
    return this.httpClient.post(`${this.apiURL}/clients/${number}`, client);
  };
  
  public getClients() {
    return this.httpClient.get(`${this.apiURL}/clients`);
  }

  public getAcheteurs() {
    return this.httpClient.get(`${this.apiURL}/clients?filter=acheteur`);
  }
  public getVendeurs() {
    return this.httpClient.get(`${this.apiURL}/clients?filter=vendeur`);
  }
}

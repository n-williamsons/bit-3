import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiConsuming {

  constructor() { }

  private httpClient = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,flag,flags,population,currencies,languages';



  getCountries(){
    return this.httpClient.get(this.apiUrl);
    
  }

  getCountryByName(countryName: string): Observable<any[]> {
  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  return this.httpClient.get<any[]>(url);
}




}

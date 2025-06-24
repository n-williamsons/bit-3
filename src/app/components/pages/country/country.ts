import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from "../shared/navigation/navigation";
import { ApiConsuming } from '../../../services/api-consuming';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from '../../../interfaces/country';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country',
  imports: [Navigation, DecimalPipe],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class Country implements OnInit { // <--- implementa OnInit
  private countryapi = inject(ApiConsuming);
  private route = inject(ActivatedRoute)

  country!: ICountry;

  ngOnInit(): void {
      this.route.params.subscribe(params => {
          const countryName = params['name'];
          this.countryapi.getCountryByName(countryName).subscribe((countryArr: any[]) => {
              const { name, capital, flag, flags, population, currencies, languages, maps } = countryArr[0];
              this.country = { name, capital, flag, flags, population, currencies, languages, maps };
              console.log(countryArr[0]);
          });
      });
  }

  getLanguagesList(languages: any): string {
  return Object.values(languages).join(', ');
  }

  getCurrencyText(currencies: any): string {
  const key = Object.keys(currencies)[0];
  const currency = currencies[key];
  return `${currency.name} (${currency.symbol})`;
}

}

import { Component, inject, OnInit } from '@angular/core';
import { ApiConsuming } from '../../../services/api-consuming';
import { Navigation } from '../shared/navigation/navigation';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-api',
  imports: [Navigation, RouterLink, DecimalPipe ],
  templateUrl: './api.html',
  styleUrl: './api.css',
})

export class Api {
  private apiConsuming = inject(ApiConsuming);
  countries: any[] = [];

  fetchCountries() {
    this.apiConsuming.getCountries().subscribe((res: any) => {
      //console.log(res);
      this.countries = res;
    });
  }

  


}

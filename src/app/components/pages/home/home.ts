import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterModule, DecimalPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

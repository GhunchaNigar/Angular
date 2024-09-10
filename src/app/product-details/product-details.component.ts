import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import {RouterLink, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeaderComponent,RouterLink,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}

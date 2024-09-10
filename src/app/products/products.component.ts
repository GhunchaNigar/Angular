import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {RouterLink, RouterModule, Routes} from '@angular/router';
import { Route} from '@angular/router'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, RouterLink, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}

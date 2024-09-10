import { HeaderComponent } from "../header/header.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}

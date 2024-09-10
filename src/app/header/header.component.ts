import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RouterLink, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

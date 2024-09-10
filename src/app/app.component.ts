import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent} from './products/products.component'
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,LoginComponent, RouterLink, RouterLinkActive, RouterOutlet, ForgetpassComponent, HeaderComponent, ReactiveFormsModule, NgFor, NgIf,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project';
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('', [Validators.required]),
  });
  loginUser() {
    console.warn(this.loginForm.value);
  }
  get pass() {
    return this.loginForm.get('password');
  }
}


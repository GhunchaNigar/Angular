import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component'

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

}

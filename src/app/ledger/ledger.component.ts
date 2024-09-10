import { Component } from '@angular/core';
import {HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-ledger',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './ledger.component.html',
  styleUrl: './ledger.component.css'
})
export class LedgerComponent {

}

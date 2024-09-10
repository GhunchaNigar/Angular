import { Component } from '@angular/core';
import { HeaderComponent} from '../header/header.component'

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {

}

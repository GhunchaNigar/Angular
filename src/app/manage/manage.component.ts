import { Component } from '@angular/core';
import { HeaderComponent} from '../header/header.component'

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {

}

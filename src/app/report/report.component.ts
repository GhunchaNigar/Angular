import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}

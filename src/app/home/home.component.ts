import { Component } from '@angular/core';
import { ScheduletableComponent } from '../scheduletable/scheduletable.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScheduletableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

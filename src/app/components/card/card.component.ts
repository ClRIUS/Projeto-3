import { Component, Input } from '@angular/core';
import { Hamburguers } from '../../interfaces/hamburguers';
import { Categories } from '../../interfaces/categories';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() hamburguerData:Hamburguers | undefined
  @Input() categoryData:Categories | undefined
}

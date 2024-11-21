import { HamburguersService } from './../../../services/hamburguers.service';
import { Component, inject } from '@angular/core';
import { Hamburguers } from '../../../interfaces/hamburguers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  hamburguerList: Hamburguers[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  hamburguersService: HamburguersService = inject(HamburguersService);

  constructor(){
    const id = Number(this.route.snapshot.params['id']);
  }
}

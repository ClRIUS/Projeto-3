import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { Categories } from '../../interfaces/categories';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  categoryList: Categories [] = [
    {
      "id": 1,
      "title": "X-Vegan",
      "text": "Hamburguers feitos para clientes Veganos.",
      "image": "../../../assets/img/hamburguer.png"
    },
    {
      "id": 2,
      "title": "X-Fitness",
      "text": "Hamburguers feitos para quem segue uma rotina Fitness.",
      "image": "../../../assets/img/hamburguer.png"
    },
    {
      "id": 3,
      "title": "X-Infarto",
      "text": "Hamburguers feitos para atender sua fome!",
      "image": "../../../assets/img/hamburguer.png"
    }
  ]
}

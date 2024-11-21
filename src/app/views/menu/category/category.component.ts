import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../components/card/card.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Categories } from '../../../interfaces/categories';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryList: Categories[] = [
    {
      id: 1,
      title: 'X-Vegan',
      text: 'Hamburguers feitos para clientes Veganos.',
      image: '../../../assets/img/hamburguer.png',
    },
    {
      id: 2,
      title: 'X-Fitness',
      text: 'Hamburguers feitos para quem segue uma rotina Fitness.',
      image: '../../../assets/img/hamburguer.png',
    },
    {
      id: 3,
      title: 'X-Infarto',
      text: 'Hamburguers feitos para atender sua fome!',
      image: '../../../assets/img/hamburguer.png',
    },
  ];
    
   constructor(private router: Router) {}

  goCategory(categoryId: number): void {
    // Passando o id da categoria para a rota de produtos
    this.router.navigate(['/products', categoryId]);
  }
}

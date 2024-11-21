import { Component } from '@angular/core';
import { Hamburguers } from '../../../interfaces/hamburguers';
import { CardComponent } from '../../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../../../interfaces/categories';
 
@Component({
  selector: 'app-hamburguers',
  standalone: true,
  imports: [CardComponent, CommonModule, ButtonComponent, RouterModule],
  templateUrl: './hamburguers.component.html',
  styleUrl: './hamburguers.component.scss',
})
export class HamburguersComponent {
  hamburguerList: Hamburguers[] = [
    {
      id: 1,
      title: 'X-Alface-Premium',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 1,
    },
    {
      id: 2,
      title: 'X-Tomate',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 1,
    },
    {
      id: 3,
      title: 'X-Frutas',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 1,
    },
    {
      id: 4,
      title: 'X-Terremoto',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 3,
    },
    {
      id: 5,
      title: 'X-Tsunami',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 3,
    },
    {
      id: 6,
      title: 'X-Pressão-Alta',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 3,
    },
    {
      id: 7,
      title: 'X-Whey',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 2,
    },
    {
      id: 8,
      title: 'X-Creatina',
      text: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
      detailedDescription: '../../../assets/img/hamburguer.png',
      image: '../../../assets/img/hamburguer.png',
      price: 45.99,
      categoryId: 2,
    },
    
  ];

  filteredHamburguerList: Hamburguers[] = [];
  categoryName: string = '';

  categoryList: Categories[] = [
    { id: 1, title: 'X-Vegan', text: 'Hamburguers feitos para clientes Veganos.', image:'../../../assets/img/hamburguer.png' },
    { id: 2, title: 'X-Fitness', text: 'Hamburguers feitos para quem segue uma rotina Fitness.', image:'../../../assets/img/hamburguer.png'},
    { id: 3, title: 'X-Infarto', text: 'Hamburguers feitos para atender sua fome!', image:'../../../assets/img/hamburguer.png'},
  ];

   constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const categoryId = Number(this.route.snapshot.paramMap.get('categoryId')); // Pega o categoryId da URL
    
    // Filtra os produtos pela categoria
    this.filteredHamburguerList = this.hamburguerList.filter(
      (product) => product.categoryId === categoryId
    );
    
    // Encontra o nome da categoria
    const category = this.categoryList.find(cat => cat.id === categoryId);
    if (category) {
      this.categoryName = category.title; // Define o nome da categoria
    }
  }
}

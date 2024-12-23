import { Injectable } from '@angular/core';
import { Hamburguers } from '../../app/interfaces/hamburguers';

@Injectable({
  providedIn: 'root',
})
export class HamburguersService {
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

  constructor() {}

  getHamburguerById(id: number): Hamburguers|undefined {
    return this.hamburguerList.find(hamburguer => hamburguer.id === id);
  }


}

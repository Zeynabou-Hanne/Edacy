import { Component, OnInit } from '@angular/core';
import {SimpleProduct} from "./interfaces/produits";
import { createProduct, createProducts } from './donnees/produit.generator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public produits!:SimpleProduct[];//fais moi confiance je vais mettre quelque chose dedans
  public produit!:SimpleProduct;
  constructor(){}
  //Avant de demarrer fais ceci
  ngOnInit(): void {
    this.produits=createProducts(16);
  }
  isPromo(produit:SimpleProduct):boolean{
    return produit.promo;
  }
  addToCart(prod: SimpleProduct){
    console.log(prod);
  }
}

//gitAll pour afficher tout les produits
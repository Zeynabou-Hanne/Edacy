import { Component, OnInit } from '@angular/core';
import {SimpleProduct} from "./interfaces/produits";
import { createProduct, createProducts } from './donnees/produit.generator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  produits!:SimpleProduct[];//fais moi confiance je vais mettre quelque chose dedans
  //Avant de demarrer fais ceci
  ngOnInit(): void {
    this.produits=createProducts();
    console.log(this.produits)
  }
}

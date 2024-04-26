import { Component, OnInit } from '@angular/core';
import {SimpleProduct} from "./interfaces/produits";
import { createProduct, createProducts } from './donnees/produit.generator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public productCache!:SimpleProduct[];
  public produits!:SimpleProduct[];//fais moi confiance je vais mettre quelque chose dedans
  public produit!:SimpleProduct;
  public message = 'Acceuil - Rcherche';
  private pr="test";
  constructor(){}
  //Avant de demarrer fais ceci
  ngOnInit(): void {
    this.produits=createProducts(36);
    this.productCache=this.produits
  }
  public isPromo(produit:SimpleProduct):boolean{
    return produit.promo;
  }
  public addToCart(ev: any){
    console.log();
  }
  public filtrerProduits(text:string){
    this.handleFiltering(text);

  }
  private handleFiltering(t:string){
    if(t==null || !t.length){
      //54:48
    }
    this.produits=this.productCache.filter((_produit)=> _produit.name.includes(t));
  }
}

//gitAll pour afficher tout les produits
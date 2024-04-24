export interface SimpleProduct {//interface produit
    id: string;
    name:string;
    description:string;
    image: string;
    price?:string;
    category:string,
    promo:boolean;
    promoVal?:number //optional
}
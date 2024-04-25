import { faker } from "@faker-js/faker";
import { SimpleProduct } from "../interfaces/produits";
import { min } from "rxjs";

export function createProduct():SimpleProduct{
    const hasPromo =faker.datatype.boolean();
    return{
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
       // se sont tous des images personnes  image:faker.image.avatar(),
        image:faker.image.imageUrl(640,480,'fashion',true),//fashion est obsolete utilise technics
        price:faker.commerce.price(100,200,2),
        category:faker.commerce.department(),
        promo:hasPromo,
        promoVal:hasPromo ? faker.datatype.number({min:10,max:60}):undefined,
    };
}
export function createProducts(nombreDeProduits:number=10):SimpleProduct[]{
    return faker.helpers.multiple(createProduct,{count:nombreDeProduits})
}
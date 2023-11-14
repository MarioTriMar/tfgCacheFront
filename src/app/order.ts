import { Company } from "./company";
import { Product } from "./product";

export class Order {
    id:string;
    company:Company
    creationTime:Date
    customer:any
    price:number
    product:Product[]
}

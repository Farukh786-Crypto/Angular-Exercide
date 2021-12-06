import { Component } from '@angular/core'
import {Product} from './product.entity'

@Component({
    selector:'task2-comp',
    templateUrl:'./TaskTwo.component.html'
})

export class TaskTwoComponent{
    title:string='Pass Object From Component to View';
    product:Product=new Product();
    ngOnInit(){
        this.product={
            id:'p01',
            name:'name 1',
            photo:'amrita.jpg',
            price:20,
            quantity:6
        }
    }
}











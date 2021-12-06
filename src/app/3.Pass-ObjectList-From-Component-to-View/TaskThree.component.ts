import { Component } from '@angular/core'
import { Product } from '../2.Pass-Object-From-Component-to-View/product.entity'

@Component({
    selector: 'task3-comp',
    templateUrl: './TaskThree.component.html'
})

export class TaskThreeComponent {
    title: string = 'Pass Object List From Component to View';
    products:Product[]=[];
    ngOnInit() {
        this.products = [
            {
                id: 'p01',
                name: 'name 1',
                photo: 'amrita.jpg',
                price: 20,
                quantity: 6
            },
            {
                id: 'p02',
                name: 'name 2',
                photo: 'Rakul.jpg',
                price: 12,
                quantity: 3
            },
            {
                id: 'p03',
                name: 'name 3',
                photo: 'kriti.jpg',
                price: 14,
                quantity: 8
            }
        ];
    }
}











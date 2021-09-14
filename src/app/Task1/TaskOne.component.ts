import { Component } from '@angular/core'
import { Customer } from './Customer';

@Component({
    selector:'task1-comp',
    templateUrl:'./TaskOne.component.html'
})

export class TaskOneComponent{
    title:string='Passing value from component to view';
    customer:Customer=new Customer();
    ngOnInit(){
        this.customer.age=20;
        this.customer.fullName='abc';
        this.customer.status=true;
        this.customer.email='a@gmail.com';
    }
}











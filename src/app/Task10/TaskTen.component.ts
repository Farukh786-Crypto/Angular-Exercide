import { Component, OnInit } from '@angular/core'

@Component({
    selector:'task10-comp',
    templateUrl:'./TaskTen.component.html'
})

export class TaskTenComponent implements OnInit{
    title:string='Data-Binding in Angular 12';
    // One Way Data Binding and Two Way Data Binding
    result:string='';

    result1:string='';

    ngOnInit(){
        this.result='Use One-Way';
        this.result1='two way Binding';
    }

}








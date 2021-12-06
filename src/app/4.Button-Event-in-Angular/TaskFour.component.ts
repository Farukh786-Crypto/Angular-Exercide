import { Component } from '@angular/core'

@Component({
    selector:'task4-comp',
    templateUrl:'./TaskFour.component.html'
})

export class TaskFourComponent{
    title:string='Button Event in Angular 12'
    result:string=''
    ClickMe()
    {
        this.result='Hello World';
    }

}












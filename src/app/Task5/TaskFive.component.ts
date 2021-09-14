import { Component } from '@angular/core'

@Component({
    selector:'task5-comp',
    templateUrl:'./TaskFive.component.html'
})

export class TaskFiveComponent{
    title:string='KeyUp Event in Angular 12'
    result:string=''
    Display(event:any)
    {
        this.result='Hello '+ event.target.value;
    }

}












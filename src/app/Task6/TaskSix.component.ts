import { Component } from '@angular/core'

@Component({
    selector:'task6-comp',
    templateUrl:'./TaskSix.component.html'
})

export class TaskSixComponent{
    title:string='KeyUp.Enter Event in Angular 12'
    result:string='';
    display(event:any)
    {
        this.result=" Hello "+event.target.value;
    }
}












import { Component } from '@angular/core'

@Component({
    selector:'task7-comp',
    templateUrl:'./TaskSeven.component.html'
})

export class TaskSevenComponent{
    title:string='ChangeEvent in angular 12'
    result:string='';

    display(event:any):void
    {
        this.result='Category Id is selected :'+event.target.value;
    }


}









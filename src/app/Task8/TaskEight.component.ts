import { Component, OnInit } from '@angular/core'
import { Category } from './category.entity';

@Component({
    selector:'task8-comp',
    templateUrl:'./TaskEight.component.html'
})

export class TaskEightComponent implements OnInit{
    title:string='select element from List with change Event in Angular 12'
    ngOnInit(): void {
        this.categories=[
            {id: 'c1', name:'category 1'},
            {id: 'c2', name:'category 2'},
            {id: 'c3', name:'category 3'},
            {id: 'c4', name:'category 4'}
        ];
    }
   
    result:string='';
    categories:Category[]=[];

    display(event:any):void
    {
        this.result='Category Id is selected :'+event.target.value;
    }


}









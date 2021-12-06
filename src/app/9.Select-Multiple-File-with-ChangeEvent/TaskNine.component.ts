import { Component } from '@angular/core'

@Component({
    selector:'tesk9-comp',
    templateUrl:'./TaskNine.component.html'
})

export class TaskNineComponent{
    title:string='Select Multiple File with Change Event in Angular 12';
    result:string='';


    save(event:any){
        var selectedFile=event.target.files[0];
        this.result = 'File Name :'+selectedFile.name;
        this.result = '<br> File Size(byte):' +selectedFile.size;
        this.result = '<br>File Type:' +selectedFile.type;
    }


    saveMultiple(event:any):void{
        var selectedFiles=event.target.files;
        for(var i=0;i<selectedFiles.length;i++){
            this.result += '<br>File Name:' + selectedFiles[i].name;
            this.result += '<br>File Size(byte):' + selectedFiles[i].size;
            this.result += '<br>File Type:' + selectedFiles[i].type;
            this.result += '<br>-----------------------------------------'
        }
    }

}










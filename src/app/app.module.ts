import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './1.Passing-value-from-component-to-view/TaskOne.component';
import { TaskTwoComponent } from './2.Pass-Object-From-Component-to-View/TaskTwo.component';
import { TaskThreeComponent } from './3.Pass-ObjectList-From-Component-to-View/TaskThree.component';
import { TaskFourComponent } from './4.Button-Event-in-Angular/TaskFour.component';
import { TaskFiveComponent } from './5.KeyUp-Event-in-Angular/TaskFive.component';
import { TaskSixComponent } from './6.KeyUp.Enter-Event-in-Angular/TaskSix.component';
import { TaskSevenComponent } from './7.ChangeEvent-in-Angular/TaskSeven.component';
import { TaskEightComponent } from './8.List-of-ChangeEvent/TaskEight.component';
import { TaskNineComponent } from './9.Select-Multiple-File-with-ChangeEvent/TaskNine.component';
import { TaskTenComponent } from './10.Data-Binding-in-Angular/TaskTen.component';
import { TaskElevenComponent } from './11.FormControl-in-Angular/TaskEleven.component';
import { TaskTwelve } from './12.Full-Form-Validation-Apply/Forms-Validation.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
    TaskFiveComponent,
    TaskSixComponent,
    TaskSevenComponent,
    TaskEightComponent,
    TaskNineComponent,
    TaskTenComponent,
    TaskElevenComponent,
    TaskTwelve
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

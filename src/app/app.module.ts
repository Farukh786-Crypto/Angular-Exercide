import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './Task1/TaskOne.component';
import { TaskTwoComponent } from './Task2/TaskTwo.component';
import { TaskThreeComponent } from './Task3/TaskThree.component';
import { TaskFourComponent } from './Task4/TaskFour.component';
import { TaskFiveComponent } from './Task5/TaskFive.component';
import { TaskSixComponent } from './Task6/TaskSix.component';
import { TaskSevenComponent } from './Task7/TaskSeven.component';
import { TaskEightComponent } from './Task8/TaskEight.component';
import { TaskNineComponent } from './Task9/TaskNine.component';
import { TaskTenComponent } from './Task10/TaskTen.component';
import { TaskElevenComponent } from './Task11/TaskEleven.component';
import { TaskTwelveComponent } from './Task12/TaskTwelve.component';


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
    TaskTwelveComponent
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

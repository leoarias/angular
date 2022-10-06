import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BotonComponent } from './components/boton/boton.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TasksComponent,
    TasksItemComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

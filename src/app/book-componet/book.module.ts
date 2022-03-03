import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {AppRoutingModule} from "./book-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListBookComponent } from './list-book/list-book.component';
import {BookComponetComponent} from "./book-componet.component";
import { DetailBookComponent } from './detail-book/detail-book.component';



@NgModule({
  declarations: [
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    ListBookComponent,
    BookComponetComponent,
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class BookModule { }

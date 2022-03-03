import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";


const routes: Routes = [
  { path: 'create-book', component: CreateBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'detail-book/:id', component: DetailBookComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

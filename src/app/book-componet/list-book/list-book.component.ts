import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";


@Component({
  selector: 'app-list-tour',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  public books: Book[] = [];


  constructor(private http: HttpClient, private bookService: BookService) {
    this.findAll();
  }

  tour: Book = new Book(0, "","","")
  ngOnInit(): void {
  }

  findAll() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    }, error => {

    })
  }



  searchTour(value:string) {
    console.log(value);
    const results: Book[] = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        || book.author.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !value) {
      this.findAll();
    }
  }
}

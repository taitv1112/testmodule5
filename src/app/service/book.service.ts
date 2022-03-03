import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../book-componet/model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private  http:HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  create(tour: Book): Observable<any> {
    return this.http.post('http://localhost:3000/books', tour);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }

  findById(id: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  edit(book: Book): Observable<any>{

    return this.http.put('http://localhost:3000/books/'+ book.id, book);
  }


}

import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book = new Book(0,'','','');
  id!:number
  constructor(private http: HttpClient, private bookService: BookService, private router:ActivatedRoute, private routerBack: Router) {
    this.router.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'))
      this.detailTour()
    })
  }

  ngOnInit(): void {
  }

  detailTour() {
    this.bookService.findById(this.id).subscribe(data => {
      this.book = data;

    }, error => {

    })
  }

  edit() {
    this.bookService.edit(this.book).subscribe(data =>{
      this.book = data;
      alert("Edit success");
      this.routerBack.navigate(["/book/list-book"]);
    })
  }

}

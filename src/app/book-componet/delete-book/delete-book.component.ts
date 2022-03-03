import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book=new Book(0,'','','');
  id!:number
  constructor(private http: HttpClient, private bookService: BookService, private router:ActivatedRoute, private routerBack: Router) {
    this.router.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'))
      this.detailTour()
      console.log("vao day roi",this.book
      )
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

  delete() {
    this.bookService.delete(this.id).subscribe(data => {
      alert("Delete success");
      this.routerBack.navigate(["/book/list-book"]);
    })
  }

}

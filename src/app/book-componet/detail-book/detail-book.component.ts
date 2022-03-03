import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {Book} from "../model/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
book=new Book(0,'','','');
id!:number
  constructor(private http: HttpClient, private bookService: BookService, private router:ActivatedRoute) {
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
    console.log(error);
    })
  }

}

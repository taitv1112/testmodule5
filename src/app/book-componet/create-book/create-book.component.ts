import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  formCreate!: FormGroup;

  constructor(private http: HttpClient, private tourService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      title: new FormControl("", Validators.minLength(6)),
      author: new FormControl(""),
      description: new FormControl("")

    })
  }


  create() {
    this.tourService.create(this.formCreate.value).subscribe(data =>{
      console.log(this.formCreate.value)
      alert("create Ok")
      this.router.navigate(["/book/list-book"]);
    })
  }

}

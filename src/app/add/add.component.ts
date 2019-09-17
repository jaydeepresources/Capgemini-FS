import { BooksService } from './../books.service';
import { Book } from './../../model/Book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newBook: Book
  successFlag: boolean

  constructor(public booksService: BooksService) {
    this.newBook = new Book()
    this.successFlag = false
  }

  ngOnInit() {
  }

  addBook(addForm) {
    this.successFlag = false
    this.booksService.books.push(this.newBook)
    console.log(this.booksService.books)
    addForm.form.markAsPristine()
    this.newBook = new Book()
    this.successFlag = true
    setTimeout(() => {
      this.successFlag = false
    }, 2000);
  }

}

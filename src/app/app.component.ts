import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchedId: number
  searchedTitle: string
  searchedAuthor: string
  searchedYear: number

  constructor(public booksService: BooksService) {
    this.searchedId = undefined
    this.searchedTitle = undefined
    this.searchedAuthor = undefined
    this.searchedYear = undefined

    booksService.getBooks()
      .subscribe(data => this.booksService.books = data)
  }

  searchById() {
    this.searchedTitle = undefined
    this.searchedAuthor = undefined
    this.searchedYear = undefined
    this.booksService.filterBooksById(this.searchedId)
  }

  searchByTitle() {
    this.searchedId = undefined
    this.searchedAuthor = undefined
    this.searchedYear = undefined
    this.booksService.filterBooksByTitle(this.searchedTitle)
  }

  searchByAuthor() {
    this.searchedId = undefined
    this.searchedTitle = undefined
    this.searchedYear = undefined
    this.booksService.filterBooksByAuthor(this.searchedAuthor)
  }

  searchByYear() {
    this.searchedId = undefined
    this.searchedTitle = undefined
    this.searchedAuthor = undefined
    this.booksService.filterBooksByYear(String(this.searchedYear))
  }


}
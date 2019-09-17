import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  searchedId: number
  searchedTitle: string
  searchedAuthor: string
  searchedYear: number

  constructor(public booksService: BooksService) {
    this.searchedId = undefined
    this.searchedTitle = undefined
    this.searchedAuthor = undefined
    this.searchedYear = undefined
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

  ngOnInit() {

  }
}

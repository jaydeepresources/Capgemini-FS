import { Book } from './../model/Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[]
  filteredBooks: Book[]

  constructor(public http: HttpClient) {
    this.books = []
    this.filteredBooks = []
  }

  getBooks() {
    return this.http.get<Book[]>('../assets/booklist.json')
  }

  filterBooksById(id: number) {
    this.filteredBooks = this.books.filter(book => book.id == id)
  }

  filterBooksByTitle(title: string) {
    this.filteredBooks = this.books.filter(book => book.title.toLowerCase().indexOf(title.toLowerCase()) > -1)
  }

  filterBooksByAuthor(author: string) {
    this.filteredBooks = this.books.filter(book => book.author.toLowerCase().indexOf(author.toLowerCase()) > -1)
  }

  filterBooksByYear(year: string) {
    this.filteredBooks = this.books.filter(book => String(book.year).indexOf(year) > -1)
  }

}

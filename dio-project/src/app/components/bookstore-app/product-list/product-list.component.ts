import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = [{
    id: '',
    category: '',
    img: '',
    name: '',
    price: 0,
    quantity: 0,
  }];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.livros = this.bookService.getBook()
    console.log(this.livros)
  }

}

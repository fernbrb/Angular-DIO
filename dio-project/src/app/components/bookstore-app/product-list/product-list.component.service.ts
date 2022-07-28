import { Injectable } from "@angular/core";
import { Book } from "./model/book";


@Injectable({
    providedIn: 'root'
})

export class BookService{
    livros:Book[] = [{
        id:'1',
        category: 'Fantasy',
        img: './assets/images/img1.jpg',
        name: 'The Lord of the Rings - Fellowship of the Ring',
        price: 29.00,
        quantity: 7,
    },
    {
        id:'2',
        category: 'Fantasy',
        img: './assets/images/img2.jpg',
        name: 'The Lord of the Rings - The Two Towers',
        price: 29.00,
        quantity: 13,
    },
    {
        id: '3',
        category: 'Fantasy',
        img: './assets/images/img3.jpg',
        name: 'The Lord of the Rings - The Return of the King',
        price: 29.00,
        quantity: 10,
    },
    {
        id: '4',
        category: 'Fantasy',
        img: './assets/images/img4.jpg',
        name: 'The Silmarillion',
        price: 39.00,
        quantity: 30,
    },
    {
        id: '5',
        category: 'Fantasy',
        img: './assets/images/img5.jpg',
        name: 'The Hobbit',
        price: 19.00,
        quantity: 6,
    }
    ]
    getBook() {
        return this.livros;
    }
}

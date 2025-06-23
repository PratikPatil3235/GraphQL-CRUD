import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public bookData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.bookData.push(book);
    return `Book added succesfully`;
  }

  updateBook(id: number, updatedBook: BookEntity): string {
    for (let x = 0; x < this.bookData.length; x++) {
      if (this.bookData[x].id === id) {
        this.bookData[x] = updatedBook;
      }
    }
    return `Book updated Succesfully ...`;
  }

  deleteBook(id: number):string {
    this.bookData = this.bookData.filter((book) => book.id !== id);
    return `book has been deleted`;
  }

  findBookById(id: number): BookEntity | undefined {
    for (let x = 0; x < this.bookData.length; x++) {
      if (this.bookData[x].id === id) {
        return this.bookData[x];
      }
    }
  }

  findAllBooks(): BookEntity[] {
    return this.bookData;
  }
}

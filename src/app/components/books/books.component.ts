import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GotService } from 'src/app/services/got.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allBooks: any; 
  public loading: boolean;

  constructor(public gotService:GotService, public router:Router) {
    this.loading = true;
   }

  ngOnInit() {
    let resultado = this.gotService.getAllBooks().subscribe(
      data => {
        this.allBooks = data;
        this.loading = false;
      },
      error => {
        
        console.log(error);

      }
    );
    console.log(resultado)
  }

}

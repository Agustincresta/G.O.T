import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quote:any;
  constructor(public gotService:GotService) { }

  ngOnInit(): void {

    this.gotService.randomQuotes().subscribe(
      data=> {
        this.quote = data;
        console.log(data)
      },
      error => {
        console.log(error)
      })
  }

}

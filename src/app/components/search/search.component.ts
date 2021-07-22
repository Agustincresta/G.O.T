import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public character:any;
  constructor(public _http:HttpClient, public gotService:GotService, public _route:ActivatedRoute) { }

  ngOnInit(): void {

  }
}

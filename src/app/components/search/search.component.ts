import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public allCharacters: any;
  public characters:any;


  constructor(public _http:HttpClient, public gotService:GotService, public _route:ActivatedRoute) {

  }
 

    
  ngOnInit(): void {


  this.gotService.getAllCharacters().subscribe(
    data=>{
      this.allCharacters = data;
      console.log(this.allCharacters)
    },
    error =>{
      console.log(error)
    }
  )

  }

  findMatches(wordToSearch:string, allCharacters = this.allCharacters) {
    this.characters = allCharacters.filter((character:any) => {
        const regex = new RegExp(wordToSearch, 'gi');

        
        return character.fullName.match(regex)
    })

    

    
}
}

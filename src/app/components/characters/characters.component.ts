import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GotService } from 'src/app/services/got.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters: any;
  public loading: boolean;
  public p: number = 1;

  public characters:any;

  constructor(public _http:HttpClient, public gotService:GotService, public _router:Router) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.gotService.getAllCharacters().subscribe(
      data=>{
        this.allCharacters = data;
        this.loading = false;
      },
      error =>{
        console.log(error)
      }
    )

  }

  findMatches(wordToSearch: NgForm, allCharacters = this.allCharacters) {
    
    this.characters = allCharacters.filter((character:any) => {
        const regex = new RegExp(wordToSearch.value.name.toString(), 'gi');

        
        return character.fullName.match(regex)
    })

    console.log(this.characters)
  }
}

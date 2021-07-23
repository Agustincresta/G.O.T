import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public character:any;
  constructor(public _http:HttpClient, public gotService:GotService, public _route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    let characterId = this._route.snapshot.paramMap.get('id');


    this.gotService.getCharacter(characterId).subscribe(
      data=> {
        this.character = data;
        console.log(this.character)
      },
      error => {
        console.log(error)
      }
    )
  }

  
}

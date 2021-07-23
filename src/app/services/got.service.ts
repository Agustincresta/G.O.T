import { Injectable } from '@angular/core';

import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  public baseUrl = 'https://www.anapioficeandfire.com/api/';
  public baseUrl2 = "https://thronesapi.com/api/v2";
  public baseUrl3 = "https://game-of-thrones-quotes.herokuapp.com/v1";

  constructor(public _http:HttpClient) {

  }

  getAllBooks() {
    let response = this._http.get(this.baseUrl + '/books');
    console.log(response);
    return response; 
  }

  getAllCharacters() {
    let response = this._http.get(this.baseUrl2 + '/characters');
    
    return response; 
  }

  getCharacter(idCharacter:any){
    let response = this._http.get(this.baseUrl2 + '/characters/'+ idCharacter);
    console.log(response);
    return response; 
  }

  randomQuotes(){
    let response = this._http.get(this.baseUrl3 + '/random');
    console.log(response);
    return response; 
  }


}

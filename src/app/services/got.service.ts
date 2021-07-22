import { Injectable } from '@angular/core';

import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  public baseUrl = 'https://www.anapioficeandfire.com/api/';
  public baseUrl2 = "https://thronesapi.com/api/v2";

  constructor(public _http:HttpClient) {

  }

  getAllBooks() {
    let response = this._http.get(this.baseUrl + '/books');
    console.log(response);
    return response; 
  }

  getAllCharacters() {
    let response = this._http.get(this.baseUrl2 + '/characters');
    console.log(response);
    return response; 
  }

  getAllHouses() {
    let response = this._http.get(this.baseUrl + '/houses');
    console.log(response);
    return response; 
  }

  getBook(idBook:any){
    let response = this._http.get(idBook);
    console.log(response);
    return response; 
  }

  getHouse(idHouse:any){
    let response = this._http.get(idHouse);
    console.log(response);
    return response; 
  }

  getCharacter(idCharacter:any){
    let response = this._http.get(this.baseUrl2 + '/characters/'+ idCharacter);
    console.log(response);
    return response; 
  }

}

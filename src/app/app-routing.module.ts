import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';




const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'home', component:BooksComponent},
  {path:'books', component:BooksComponent},
  {path:'characters', component:CharactersComponent},
  {path:'character/:id', component:CharacterComponent },
  {path:'quote', component:QuoteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

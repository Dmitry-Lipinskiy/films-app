import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IFilm, IInfo, ISearch, IType } from './shared/model/film-app.model';
import { FilmService } from './shared/service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'films-app';

  types: IType[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'series', viewValue: 'Series'},
    {value: 'episode', viewValue: 'Episode'},
  ];

  inputValue: string = "";
  typeValue: string = "";
  page!: number;
  pageIndex: number = 1;

  films: IFilm[] = [];
  info!: IInfo;
  filmsResponse!: ISearch;

  isFilmsVisible: boolean = false;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  getFilms($event?: PageEvent): void {
    if ($event) {
      this.pageIndex += $event?.pageIndex!;
    }

    if (this.inputValue) {
      this.isFilmsVisible = true;

      this.filmService.getAllFilms(this.inputValue, this.typeValue, this.pageIndex).subscribe((films: ISearch) => {
          this.filmsResponse = films;
          this.films = films.Search;

          console.log(films.Search);
          console.log(films);
      })
    } else {
      this.isFilmsVisible = false;
    }

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filmes';

@Injectable({
  providedIn: 'root'
})
export class ObterFilmesService {
  private URL: string;
  lista: Filme[];

  constructor(private http: HttpClient) {
    this.URL = 'https://ghibliapi.herokuapp.com';
    this.lista = [];
  }

  ObterFilmes(): Observable<any> {
    return this.http.get<any>(`${this.URL}/films`);
  }

  addFilme(filme: Filme) {
    let check = 0;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id == filme.id) {
        check++;
      } else {
        check = check;
      }
    }
    if (check == 0) {
      this.lista.push(filme);
    }
  }

  exibirLista() {
    return this.lista;
  }

}

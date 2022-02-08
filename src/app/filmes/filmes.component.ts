import { ObterFilmesService } from './../model/obter-filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  listaFilmes:Filme[];
  listaFilmesB:Filme[];
  showInfovar = false;
  infoTitle = '';
  infoDesc = '';
  infoRelData = '';
  infoTempFilm = '';
  infoRate = '';
  infoBanner = '';

  constructor(private of: ObterFilmesService) {
    this.listaFilmes = [];
    this.listaFilmesB = [];
    this.showInfovar = false;
  }

  addLista(element:Filme) {
    this.of.addFilme(element);
  }

  showInfo(el:Filme) {

      this.infoBanner = el.movie_banner;
      this.infoTitle = el.title;
      this.infoDesc = el.description;
      this.infoRelData = el.release_date;
      this.infoTempFilm = el.running_time;
      this.infoRate = el.rt_score;
      this.showInfovar = true;

  }

  closeInfo(){
      this.showInfovar = false;
  }

  pesquisar(nome: string) {
    if (nome != '') {
      this.listaFilmes = this.listaFilmesB;
      const listaFiltrada = this.listaFilmes.filter((filme:Filme) =>
        filme.title.toUpperCase().includes(nome.toUpperCase())
      );
      //console.log(listaFiltrada);
      this.listaFilmes = listaFiltrada;
    } else {
      this.of.ObterFilmes().subscribe((res) => {
        this.listaFilmes = res;
      });
    }
  }

  ngOnInit(): void {
    this.of.ObterFilmes().subscribe((res) => {
      this.listaFilmes = res;
    });
    this.of.ObterFilmes().subscribe((res) => {
      this.listaFilmesB = res;
    });
  }

}

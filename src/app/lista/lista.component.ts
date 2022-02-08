import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filmes';
import { ObterFilmesService } from '../model/obter-filmes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  filmes:Filme[];
  showInfovar = false;
  infoTitle = '';
  infoDesc = '';
  infoRelData = '';
  infoTempFilm = '';
  infoRate = '';
  infoBanner = '';

  constructor(private of: ObterFilmesService) {
    this.filmes = [];
  }

  ngOnInit(): void {
    this.filmes = this.of.exibirLista();
  }

  removerLista(element:Filme) {
    this.filmes.splice(this.filmes.indexOf(element), 1);
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

}

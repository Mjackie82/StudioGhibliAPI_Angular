import { TestBed } from '@angular/core/testing';

import { ObterFilmesService } from './obter-filmes.service';

describe('ObterFilmesService', () => {
  let service: ObterFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObterFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

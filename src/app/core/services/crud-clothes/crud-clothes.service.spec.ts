import { TestBed } from '@angular/core/testing';

import { CrudClothesService } from './crud-clothes.service';

describe('CrudClothesService', () => {
  let service: CrudClothesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudClothesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

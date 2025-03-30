import { TestBed } from '@angular/core/testing';

import { NewClotheService } from './new-clothe.service';

describe('NewClotheService', () => {
  let service: NewClotheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewClotheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

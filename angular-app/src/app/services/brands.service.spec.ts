/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrandsService } from './brands.service';

describe('Service: Brands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandsService]
    });
  });

  it('should ...', inject([BrandsService], (service: BrandsService) => {
    expect(service).toBeTruthy();
  }));
});

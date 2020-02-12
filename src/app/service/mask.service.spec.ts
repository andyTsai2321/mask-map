import { TestBed } from '@angular/core/testing';

import { MaskService } from './mask.service';

describe('MaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaskService = TestBed.get(MaskService);
    expect(service).toBeTruthy();
  });
});

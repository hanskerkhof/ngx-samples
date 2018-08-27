import { TestBed, inject } from '@angular/core/testing';

import { DataItemResolverService } from './data-item-resolver.service';

describe('DataItemResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataItemResolverService]
    });
  });

  it('should be created', inject([DataItemResolverService], (service: DataItemResolverService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SavedRecommendationsService } from './saved-recommendations.service';

describe('SavedRecommendationsService', () => {
  let service: SavedRecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedRecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecommendationsComponent } from './saved-recommendations.component';

describe('SavedRecommendationsComponent', () => {
  let component: SavedRecommendationsComponent;
  let fixture: ComponentFixture<SavedRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

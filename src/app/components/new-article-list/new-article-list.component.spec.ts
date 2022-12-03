import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticleListComponent } from './new-article-list.component';

describe('NewArticleListComponent', () => {
  let component: NewArticleListComponent;
  let fixture: ComponentFixture<NewArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArticleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinkticComponent } from './list-linktic.component';

describe('ListLinkticComponent', () => {
  let component: ListLinkticComponent;
  let fixture: ComponentFixture<ListLinkticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLinkticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLinkticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

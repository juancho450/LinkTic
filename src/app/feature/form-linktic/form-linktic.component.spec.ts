import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkticComponent } from './form-linktic.component';

describe('FormLinkticComponent', () => {
  let component: FormLinkticComponent;
  let fixture: ComponentFixture<FormLinkticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLinkticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLinkticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { CompletedComponent } from './completed.component';

describe('CompletedComponent', () => {
  let component: CompletedComponent;
  let fixture: ComponentFixture<CompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

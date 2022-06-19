import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

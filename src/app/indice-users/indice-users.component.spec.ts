import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceUsersComponent } from './indice-users.component';

describe('IndiceUsersComponent', () => {
  let component: IndiceUsersComponent;
  let fixture: ComponentFixture<IndiceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

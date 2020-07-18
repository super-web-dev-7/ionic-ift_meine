import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorySelectPage } from './category-select.page';

describe('CategorySelectPage', () => {
  let component: CategorySelectPage;
  let fixture: ComponentFixture<CategorySelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

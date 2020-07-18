import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherSelectPagePage } from './another-select-page.page';

describe('AnotherSelectPagePage', () => {
  let component: AnotherSelectPagePage;
  let fixture: ComponentFixture<AnotherSelectPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherSelectPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherSelectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

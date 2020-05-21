import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatenPage } from './daten.page';

describe('DatenPage', () => {
  let component: DatenPage;
  let fixture: ComponentFixture<DatenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

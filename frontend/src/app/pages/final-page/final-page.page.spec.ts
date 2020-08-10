import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalPagePage } from './final-page.page';

describe('FinalPagePage', () => {
  let component: FinalPagePage;
  let fixture: ComponentFixture<FinalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainChallengePage } from './main-challenge.page';

describe('MainChallengePage', () => {
  let component: MainChallengePage;
  let fixture: ComponentFixture<MainChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

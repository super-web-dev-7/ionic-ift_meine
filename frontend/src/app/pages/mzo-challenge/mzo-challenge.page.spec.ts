import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MzoChallengePage } from './mzo-challenge.page';

describe('MzoChallengePage', () => {
  let component: MzoChallengePage;
  let fixture: ComponentFixture<MzoChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzoChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MzoChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

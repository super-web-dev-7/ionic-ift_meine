import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChallengeCancelPage } from './challenge-cancel.page';

describe('ChallengeCancelPage', () => {
  let component: ChallengeCancelPage;
  let fixture: ComponentFixture<ChallengeCancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCancelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeCancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

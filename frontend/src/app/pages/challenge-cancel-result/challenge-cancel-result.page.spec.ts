import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChallengeCancelResultPage } from './challenge-cancel-result.page';

describe('ChallengeCancelResultPage', () => {
  let component: ChallengeCancelResultPage;
  let fixture: ComponentFixture<ChallengeCancelResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCancelResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeCancelResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

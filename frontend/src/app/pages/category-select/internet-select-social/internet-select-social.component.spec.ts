import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetSelectSocialComponent } from './internet-select-social.component';

describe('InternetSelectSocialComponent', () => {
  let component: InternetSelectSocialComponent;
  let fixture: ComponentFixture<InternetSelectSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetSelectSocialComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetSelectSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

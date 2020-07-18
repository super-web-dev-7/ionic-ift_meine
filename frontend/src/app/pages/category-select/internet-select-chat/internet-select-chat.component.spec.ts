import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetSelectChatComponent } from './internet-select-chat.component';

describe('InternetSelectChatComponent', () => {
  let component: InternetSelectChatComponent;
  let fixture: ComponentFixture<InternetSelectChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetSelectChatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetSelectChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

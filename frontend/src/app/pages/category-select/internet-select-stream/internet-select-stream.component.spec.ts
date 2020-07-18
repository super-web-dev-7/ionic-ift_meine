import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetSelectStreamComponent } from './internet-select-stream.component';

describe('InternetSelectStreamComponent', () => {
  let component: InternetSelectStreamComponent;
  let fixture: ComponentFixture<InternetSelectStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetSelectStreamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetSelectStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

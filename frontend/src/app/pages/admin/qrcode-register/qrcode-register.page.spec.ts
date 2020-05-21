import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcodeRegisterPage } from './qrcode-register.page';

describe('QrcodeRegisterPage', () => {
  let component: QrcodeRegisterPage;
  let fixture: ComponentFixture<QrcodeRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodeRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

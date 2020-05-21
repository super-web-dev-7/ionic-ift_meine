import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeRegisterPage } from './code-register.page';

describe('CodeRegisterPage', () => {
  let component: CodeRegisterPage;
  let fixture: ComponentFixture<CodeRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

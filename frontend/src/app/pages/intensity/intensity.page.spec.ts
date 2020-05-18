import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntensityPage } from './intensity.page';

describe('IntensityPage', () => {
  let component: IntensityPage;
  let fixture: ComponentFixture<IntensityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntensityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

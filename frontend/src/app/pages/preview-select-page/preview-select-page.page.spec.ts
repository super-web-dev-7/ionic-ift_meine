import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewSelectPagePage } from './preview-select-page.page';

describe('PreviewSelectPagePage', () => {
  let component: PreviewSelectPagePage;
  let fixture: ComponentFixture<PreviewSelectPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSelectPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewSelectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

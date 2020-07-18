import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSelectPagePage } from './detail-select-page.page';

describe('DetailSelectPagePage', () => {
  let component: DetailSelectPagePage;
  let fixture: ComponentFixture<DetailSelectPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSelectPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSelectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

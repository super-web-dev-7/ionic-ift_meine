import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagxPage } from './tagx.page';

describe('TagxPage', () => {
  let component: TagxPage;
  let fixture: ComponentFixture<TagxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

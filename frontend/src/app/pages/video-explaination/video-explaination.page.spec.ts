import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoExplainationPage } from './video-explaination.page';

describe('VideoExplainationPage', () => {
  let component: VideoExplainationPage;
  let fixture: ComponentFixture<VideoExplainationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoExplainationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoExplainationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

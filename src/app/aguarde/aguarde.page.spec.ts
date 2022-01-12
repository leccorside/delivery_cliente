import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AguardePage } from './aguarde.page';

describe('AguardePage', () => {
  let component: AguardePage;
  let fixture: ComponentFixture<AguardePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguardePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AguardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

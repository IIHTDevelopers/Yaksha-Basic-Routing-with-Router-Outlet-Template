import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  describe('boundary', () => {
    it('should create the home component', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      const home = fixture.debugElement.componentInstance;
      expect(home).toBeTruthy();
    });

    it(`should have as message 'Welcome to the Home Page!'`, () => {
      const fixture = TestBed.createComponent(HomeComponent);
      const home = fixture.debugElement.componentInstance;
      expect(home.message).toEqual('Welcome to the Home Page!');
    });

    it('should render message in an h2 tag', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Welcome to the Home Page!');
    });

    it('should render the paragraph text correctly', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('This is the Home Page.');
    });
  });
});

import { TestBed, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
    }).compileComponents();
  }));

  describe('boundary', () => {
    it('should create the about component', () => {
      const fixture = TestBed.createComponent(AboutComponent);
      const about = fixture.debugElement.componentInstance;
      expect(about).toBeTruthy();
    });

    it(`should have as message 'Welcome to the About Page!'`, () => {
      const fixture = TestBed.createComponent(AboutComponent);
      const about = fixture.debugElement.componentInstance;
      expect(about.message).toEqual('Welcome to the About Page!');
    });

    it('should render message in an h2 tag', () => {
      const fixture = TestBed.createComponent(AboutComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Welcome to the About Page!');
    });

    it('should render the paragraph text correctly', () => {
      const fixture = TestBed.createComponent(AboutComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('This is the About Page.');
    });
  });
});
